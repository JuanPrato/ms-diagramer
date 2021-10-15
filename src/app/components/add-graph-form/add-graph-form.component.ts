import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GraphService} from "../../services/graphs/graph.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-add-graph-form',
  templateUrl: './add-graph-form.component.html',
  styleUrls: ['./add-graph-form.component.scss']
})
export class AddGraphFormComponent {

  graphForm: FormGroup;
  invalid: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddGraphFormComponent>,
              private fb: FormBuilder,
              private graphService: GraphService,
              private auth: AuthService) {
    this.graphForm = this.fb.group({
      name: [
        "", Validators.required
      ]
    });
  }

  onNoClick () {
    this.dialogRef.close();
  }

  async submit () {

    if (this.graphForm.invalid) {
      this.graphForm.markAllAsTouched();
      this.invalid = true;
      return;
    }

    const subs = this.auth.getCurrentUserObservable().subscribe(async user => {
      subs.unsubscribe();
      if (!user) return;
      await this.graphService.addGraphToUser(user.uid, this.graphForm.value.name);
      this.onNoClick();
    });

  }

}
