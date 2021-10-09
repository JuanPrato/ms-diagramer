import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void { }

  async submit () {

    if (!this.loginForm.valid) return;

    const {email, password} = this.loginForm.value;

    try {
      const user = await this.auth.auth(email, password);
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (ex) {
      console.error(ex);
      this.loginForm.markAsDirty();
    }
  }

}
