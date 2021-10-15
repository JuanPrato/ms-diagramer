import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartScreenComponent} from "./components/start-screen/start-screen.component";



const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'graph',
    loadChildren: () => import('./modules/graph/graph.module').then(m => m.GraphModule)
  },
  {
    path: "**",
    component: StartScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
