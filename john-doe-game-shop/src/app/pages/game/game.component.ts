import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/core/models/game';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit, OnDestroy {

  private onLoad: Subscription | undefined;

  public game: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService) {}

  ngOnDestroy(): void {
    if (this.onLoad !== undefined) {
      this.onLoad.unsubscribe();
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== undefined){
      this.gameService.getGame('/assets/data/game.json').subscribe(game => this.game = game);
    }
  }
}
