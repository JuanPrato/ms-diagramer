import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import firebase from "firebase/compat";
import User = firebase.User;
import {AngularFireAuth} from "@angular/fire/compat/auth";
import InvalidCredentialsException from "../exceptions/InvalidCredentialsException";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private user: User | null = null;

  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.user.subscribe(u => {
      this.isLogInSubject.next(u !== null);
      this.user = u;
    });
  }

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

  getCurrentUserObservable (): Observable<User | null> {
    return this.fireAuth.user;
  }

  getCurrentUser (): User | null {
    return this.user;
  }

  isLogIn(): Observable<boolean> {
    return this.isLogInSubject.asObservable();
  }

}
