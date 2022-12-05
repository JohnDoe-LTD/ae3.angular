import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { GamePage } from '../models/game-page';
import { PageRequest } from '../models/page-request';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGame(url: string): Observable<Game> {
    return this.http.get<Game>(url);
  }

  getGames(pageRequest: PageRequest): Observable<GamePage> {
    return this.http.get<GamePage>(pageRequest.link.href);
  }
}
