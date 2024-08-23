import { Component, OnInit } from '@angular/core';
import { LabelComponent } from '../../shared/components/atoms/label/label.component';
import { InputComponent } from '../../shared/components/atoms/input/input.component';
import { TypographyComponent } from '../../shared/components/atoms/typography/typography.component';
import { ButtonComponent } from '../../shared/components/atoms/button/button.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    LabelComponent,
    InputComponent,
    TypographyComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmitRegister() {
    console.warn(this.registerForm.value);
  }

  onSubmitLogin() {
    console.warn(this.loginForm.value);
  }
}
