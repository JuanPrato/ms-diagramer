import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {takeUntil} from "rxjs/operators";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: 'app-session-feedback',
  templateUrl: './session-feedback.component.html',
  styleUrls: ['./session-feedback.component.scss']
})
export class SessionFeedbackComponent implements OnInit, OnDestroy {

  user: User | null = null;
  expand: boolean = false;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getCurrentUser().pipe(takeUntil(this.destroy$)).subscribe(u => {
      this.user = u;
    });
    setTimeout(() => {
      if (!this.user) this.expand = true
    }, 1500);

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  async logOut() {
    await this.auth.logOut();
  }

}
