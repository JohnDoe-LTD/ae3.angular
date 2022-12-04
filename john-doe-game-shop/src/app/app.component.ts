import { Component } from '@angular/core';
import { Image } from './shared/shared.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'john-doe-game-shop';

  public logo: Image | undefined;

  constructor() {
    this.logo = {
      src: '/assets/images/logo.jpg',
      title: "John Doe's Game Shop",
      alt: 'Go Home!',
    };
  }
}
