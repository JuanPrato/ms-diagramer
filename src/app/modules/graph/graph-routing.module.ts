import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverViewComponent} from "./components/over-view/over-view.component";

const routes: Routes = [
  {
    path: ":id",
    component: OverViewComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphRoutingModule { }
