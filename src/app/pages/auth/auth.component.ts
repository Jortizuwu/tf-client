import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
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
import { Router } from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

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
    NgxSonnerToaster,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  protected readonly toast = toast;
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

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/']);
    }
  }

  onSubmitRegister() {
    const { username, email, password } = this.registerForm.value;
    if (username && email && password) {
      this.authService
        .signup({ email, password, nickname: username })
        .subscribe(data => {
          localStorage.setItem('token', data.data.token.token);
          toast.success('registered successfully !');
          this.router.navigate(['/']);
        });
    }
  }

  onSubmitLogin() {
    const { email, password } = this.loginForm.value;

    if (email && password) {
      this.authService.signin(email, password).subscribe(data => {
        localStorage.setItem('token', data.data.token.token);
        toast.success(`welcome to back ${data.data.nickname}`);
        this.router.navigate(['/']);
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
