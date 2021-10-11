import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import User = firebase.User;
import {AngularFireAuth} from "@angular/fire/compat/auth";
import InvalidCredentialsException from "../exceptions/InvalidCredentialsException";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  async auth (user: string, password: string) {
    if (!user || !password) throw new InvalidCredentialsException();
    return this.fireAuth.signInWithEmailAndPassword(user, password);
  }

  async logOut() {
    await this.fireAuth.signOut();
  }

  async register (email: string, password: string, alias: string) {
    const userCreated = await this.fireAuth.createUserWithEmailAndPassword(email, password);
    await userCreated.user!.updateProfile({displayName: alias});
  }

  getCurrentUser (): Observable<User | null> {
    return this.fireAuth.user;
  }

  async isLogIn(): Promise<boolean> {
    return (await this.fireAuth.user.toPromise()) !== null;
  }

}
