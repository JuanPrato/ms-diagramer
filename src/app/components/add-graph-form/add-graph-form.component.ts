import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-graph-form',
  templateUrl: './add-graph-form.component.html',
  styleUrls: ['./add-graph-form.component.scss']
})
export class AddGraphFormComponent {

  constructor(public dialogRef: MatDialogRef<AddGraphFormComponent>) { }

  onNoClick () {
    this.dialogRef.close();
  }

}
