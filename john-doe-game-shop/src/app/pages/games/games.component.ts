import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameDto } from 'src/app/core/models/game-dto';
import { AuthService } from 'src/app/core/services/auth.service';
import { GameService } from 'src/app/core/services/game.service';
import { PageRequest } from '../../core/models/page-request';
import { SortValues } from '../../core/models/sort-values';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit, OnDestroy {
  private onLoad: Subscription | undefined;

  public games: GameDto[] | undefined;

  constructor(
    private authService: AuthService,
    private gameService: GameService,
    private title: Title,
    private router: Router
  ) {
    this.title.setTitle("John Doe's Game Shop | MyGames");
  }

  ngOnDestroy(): void {
    if (this.onLoad !== undefined) {
      this.onLoad.unsubscribe();
    }
  }

  ngOnInit(): void {
    const user = this.authService.user();
    const pageRequest: PageRequest = {
      query: '',
      ranking: 1,
      sortAs: SortValues.Title,
      link: {
        rel: 'list',
        method: 'GET',
        href: user!.uri,
      },
    };
    this.onLoad = this.gameService
      .getGames(pageRequest)
      .subscribe((page) => (this.games = page.data));
  }

  public onClick(game: GameDto): void {
    this.router.navigate([`/games/${game.id}`]);
  }
}
