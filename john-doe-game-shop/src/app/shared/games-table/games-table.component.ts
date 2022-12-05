import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameDto } from 'src/app/core/models/game-dto';


@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css'],
})
export class GamesTableComponent {

  @Output() public onSelect = new EventEmitter();

  @Input() public games: GameDto[] | undefined;

  constructor() {}

  onSelectHandler(game: GameDto) : void {
    this.onSelect.emit(game);
  }
}
