import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/auth.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authUrl = environment.apiUrl + '/auth';

  constructor(private http: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem('token');
  }

  signin(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.authUrl}/signin`, {
      email,
      password,
    });
  }

  signup(data: { email: string; password: string; nickname: string }) {
    return this.http.post<AuthResponse>(`${this.authUrl}/signup`, { ...data });
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }
}
