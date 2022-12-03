import { Component, Input } from '@angular/core';
import { Image } from '../shared.models';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() public image: Image | undefined;

  constructor() {}
}
