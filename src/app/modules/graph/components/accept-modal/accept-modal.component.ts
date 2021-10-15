import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-step-form',
  templateUrl: './accept-modal.component.html',
  styleUrls: ['./accept-modal.component.scss']
})
export class AcceptModal {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, text: string}) { }

}
