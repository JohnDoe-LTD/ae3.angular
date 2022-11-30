import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { GameDto } from '../models/game-dto';
import { Link } from '../models/link';
import { PageRequest } from '../models/page-request';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGame(link: Link): Observable<Game> {
    return this.http.get<Game>(link.href);
  }

  getGames(pageRequest: PageRequest): Observable<GameDto[]> {
    return this.http.get<GameDto[]>(pageRequest.link.href);
  }

}
