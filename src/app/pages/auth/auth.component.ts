import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { LabelComponent } from '../../shared/components/atoms/label/label.component';
import { InputComponent } from '../../shared/components/atoms/input/input.component';
import { TypographyComponent } from '../../shared/components/atoms/typography/typography.component';
import { ButtonComponent } from '../../shared/components/atoms/button/button.component';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    LabelComponent,
    InputComponent,
    TypographyComponent,
    ButtonComponent,
    ReactiveFormsModule,
    NgIcon,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  registerForm = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: this.passwordMatchingValidatior }
  );

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  onSubmitRegister() {
    console.warn(this.registerForm.value);
  }

  onSubmitLogin() {
    const { email, password } = this.loginForm.value;

    if (email && password) {
      this.authService.signin(email, password).subscribe(data => {
        this.loginForm.reset();
        localStorage.setItem('token', data.data.token.token);
      });
    }
  }

  passwordMatchingValidatior(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password?.value === confirmPassword?.value
      ? null
      : { notmatched: true };
  }

  inputErrorRegister(name: string): boolean {
    const isError =
      this.registerForm.get(name)?.touched &&
      this.registerForm.get(name)?.invalid;

    return !!isError;
  }

  inputErrorLogin(name: string): boolean {
    const isError =
      this.loginForm.get(name)?.touched && this.loginForm.get(name)?.invalid;

    return !!isError;
  }
}
