import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetMatchResponse, ListMatchResponse } from '../models/match.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private matchUrl = environment.apiUrl + '/match';

  constructor(private http: HttpClient) {}

  ListMatch() {
    return this.http.get<ListMatchResponse>(this.matchUrl);
  }

  getMatch(id: string) {
    return this.http.get<GetMatchResponse>(`${this.matchUrl}/${id}`);
  }
}
