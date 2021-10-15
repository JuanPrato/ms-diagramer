import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphRoutingModule } from './graph-routing.module';
import { OverViewComponent } from './components/over-view/over-view.component';
import {MatCardModule} from "@angular/material/card";
import { OverViewInteractionComponent } from './components/over-view-interaction/over-view-interaction.component';
import { GraphStepComponent } from './components/graph-step/graph-step.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AcceptModal } from './components/accept-modal/accept-modal.component';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    OverViewComponent,
    OverViewInteractionComponent,
    GraphStepComponent,
    AcceptModal
  ],
  imports: [
    CommonModule,
    GraphRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class GraphModule { }
