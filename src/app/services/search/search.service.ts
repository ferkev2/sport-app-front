
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ileague } from '../../interfaces/league.inerface';
import { Iteam } from '../../interfaces/team.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getLeagues(): Observable<Ileague[]> {
    return this.http.get<Ileague[]>(`${this.apiUrl}/leagues`);
  }

  getAllTeams(value): Observable<Iteam[]> {
    return this.http.get<Iteam[]>(`${this.apiUrl}/search?league=${value}`);
  }
}
