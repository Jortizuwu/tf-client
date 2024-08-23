import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/auth.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // TODO: CHANGE URL FOR ENV

  private authUrl = environment.apiUrl + '/auth';

  constructor(private http: HttpClient) {}

  signin(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.authUrl}/signin`, {
      email,
      password,
    });
  }
}
