import {Component, Input, OnInit} from '@angular/core';
import {Interaction} from "../../../../common/models/interaction";

@Component({
  selector: 'app-over-view-interaction',
  templateUrl: './over-view-interaction.component.html',
  styleUrls: ['./over-view-interaction.component.scss']
})
export class OverViewInteractionComponent implements OnInit {

  @Input() interaction!: Interaction;

  constructor() { }

  ngOnInit(): void {
  }

}
