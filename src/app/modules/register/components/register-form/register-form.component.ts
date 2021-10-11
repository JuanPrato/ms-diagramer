import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Constants} from "../../../../common/static/constants";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerForm: FormGroup;
  hide: boolean = true;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.min(4),
        Validators.max(16),
        Validators.pattern(/^.*(?=.*[a-zA-Z])(?=.*\d).*$/)
      ]
      ],
      confirmPassword: [
        '',
        [Validators.required]
      ],
      user: ['', Validators.required],
    }, {
      validator: this.checkIfMatchingPasswords('password', 'confirmPassword')
    });
  }

  private checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  async submit() {

    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      console.log(this.registerForm.controls);
      return;
    }
    const {email, password, user} = this.registerForm.value;

    try {
      await this.auth.register(email, password, user);
      await this.router.navigate(['/']);
      this.openSnack("Usuario registrado correctamente", "bg-black-accent");
    } catch (ex) {
      console.error(ex);
      this.openSnack("Ocurrió un error con el registro", "bg-black-warn")
    }

  }

  private openSnack (message: string, result: string) {
    this.snackBar.open(message, "cerrar", {
      horizontalPosition: "start",
      verticalPosition: "top",
      duration: 5000,
      panelClass: [
        result,
        'color-white'
      ]
    });
  }

  getInvalidity(field: string) {

    const control = this.registerForm.controls[field]!;

    return control.invalid && control.touched;
  }

  getError(field: string) : string {
    const control = this.registerForm.controls[field]!;
    const errorKeys = Object.keys(control.errors as Object);
    return Constants.registerErrors[errorKeys[0]];
  }

}
