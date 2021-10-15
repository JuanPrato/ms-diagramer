import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import firebase from "firebase/compat";
import User = firebase.User;
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AuthService} from "../../services/auth.service";
import Graph from "../../common/models/graph";
import {GraphService} from "../../services/graphs/graph.service";
import {MatDialog} from "@angular/material/dialog";
import {AddGraphFormComponent} from "../add-graph-form/add-graph-form.component";

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit, OnDestroy {

  @ViewChild('graphsList') list: any;

  user: User | null = null;
  displayedColumns: string[] = ['name', 'buttons'];
  graphs: Graph[] = [];

  private newUser$: Subject<boolean> = new Subject<boolean>();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private auth: AuthService,
              private graphService: GraphService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.auth.getCurrentUserObservable().pipe(takeUntil(this.destroy$)).subscribe(u => {
      this.user = u;
      this.newUser$.next(true);
      this.newUser$.complete();
      if (u) {
        this.graphService.getGraphFromUser(u.uid).pipe(takeUntil(this.destroy$)).subscribe(g => {
          this.graphs = g;
        });
      } else {
        this.graphs = [];
      }
    });

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  newGraph () {
    this.dialog.open(AddGraphFormComponent, {
      width: "250px"
    });
  }

}
