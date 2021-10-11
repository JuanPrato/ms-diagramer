import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartScreenComponent} from "./components/start-screen/start-screen.component";
import {NotLogInGuardGuard} from "./common/guards/not-log-in-guard.guard";
import {redirectUnauthorizedTo} from "@angular/fire/compat/auth-guard";

const redirectToMenu = () => redirectUnauthorizedTo(['/']);


const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule),
    canActivate: [NotLogInGuardGuard],
    data: {
      authGuardPipe: redirectToMenu()
    }
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
