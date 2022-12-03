import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  @Input()
  public src :string = '';

  @Input()
  public title :string = '';

  @Input()
  public alt :string = '';

  constructor(){}
}
