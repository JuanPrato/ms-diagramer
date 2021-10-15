import {Component, Input, OnInit} from '@angular/core';
import {Step} from "../../../../common/models/step";

@Component({
  selector: 'app-graph-step',
  templateUrl: './graph-step.component.html',
  styleUrls: ['./graph-step.component.scss']
})
export class GraphStepComponent implements OnInit {

  @Input() step!: Step;

  constructor() { }

  ngOnInit(): void {
  }

  async addInteraction() {

  }

}
