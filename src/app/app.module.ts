import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment} from "../environments/environment";
import { SessionFeedbackComponent } from './components/session-feedback/session-feedback.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import {MatCardModule} from "@angular/material/card";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { AddGraphFormComponent } from './components/add-graph-form/add-graph-form.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    SessionFeedbackComponent,
    StartScreenComponent,
    LoginFormComponent,
    AddGraphFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    AddGraphFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
