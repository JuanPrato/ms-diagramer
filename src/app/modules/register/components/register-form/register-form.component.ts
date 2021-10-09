import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  hide: boolean = true;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.min(4),
        Validators.max(16),
        Validators.pattern(/^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?"]).*$/)
      ]
      ],
      name: ['', Validators.required],
      alias: ['', [Validators.required, Validators.min(4)]]
    });
  }

  ngOnInit(): void {
  }

}
