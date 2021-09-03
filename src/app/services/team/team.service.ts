import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IdataTeam } from '../../interfaces/player.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getPlayersByTeam(id): Observable<IdataTeam> {
    return this.http.get<IdataTeam>(`${this.apiUrl}/team/${id}`);
  }
}
