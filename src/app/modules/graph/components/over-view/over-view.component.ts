import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Graph from "../../../../common/models/graph";
import {GraphService} from "../../../../services/graphs/graph.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Interaction} from "../../../../common/models/interaction";
import { Step } from 'src/app/common/models/step';
import {MatDialog} from "@angular/material/dialog";
import {AcceptModal} from "../accept-modal/accept-modal.component";

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnDestroy {

  private readonly id: string;
  graph?: Graph;
  steps: Step[] = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private actRouter: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private graphService: GraphService) {
    this.id = this.actRouter.snapshot.params.id;
    if (!this.id) {
      this.router.navigate(["/"]);
    }
    this.graphService.getGraphData(this.id).pipe(takeUntil(this.destroy$)).subscribe(g => {
      this.graph = g;
      if (!g) return;
      this.graphService.getInteractionsFromAGraph(g.id).pipe(takeUntil(this.destroy$)).subscribe(i => {
        this.steps = this.processInteractions(i);
        console.log(this.steps);
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private processInteractions(interactions: Interaction[]) : Step[] {

    const response : Step[] = [];

    interactions.map(i => {
      const s = response.find(r => r.stepNumber === i.step);
      if (!s) {
        response.push(new Step(
          i.step,
          [i]
        ));
      } else {
        s.addStep(i);
      }
    });

    return response.sort((s1, s2) => {
      if (s1.stepNumber > s2.stepNumber) return 1;
      else if (s1.stepNumber === s2.stepNumber) return 0;
      else return -1;
    });
  }

  addNewStep() {
    this.dialog.open(AcceptModal, {
      data: {
        title: "Agregar un nuevo paso",
        text: "Seguro que desea agregar un nuevo paso?"
      }
    })
      .afterClosed().pipe(takeUntil(this.destroy$)).subscribe(result => {
        if (result) {
          this.addStep().catch(console.error);
        }
    });
  }

  private async addStep () {
    if (!this.graph) return;
    await this.graphService.addStepToGraph(this.graph.id, this.steps.length + 1);
  }
}
