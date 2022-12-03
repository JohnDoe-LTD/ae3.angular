import { Component } from '@angular/core';
import { Figure } from 'src/app/shared/shared.models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public figure1: Figure | undefined;
  public figure2: Figure | undefined;
  public figure3: Figure | undefined;

  constructor(private title: Title) {
    this.title.setTitle("John Doe's Game Shop | Home");

    this.figure1 = {
      caption: 'We got the latest titles earlier than anyone.',
      image: {
        alt: 'We have the best providers that any other competitor could desire',
        src: '/assets/images/home/latests-games.jpg',
        title: 'Know or providers'
      },
    };

    this.figure2 = {
      caption: 'Know our activities',
      image: {
        alt: 'Our games',
        src: '/assets/images/home/more-than-games.jpg',
        title: 'More than a simple shop, we are a community',
      },
    };

    this.figure3 = {
      caption: 'Buy to play',
      image: {
        alt: 'Buyers ranking',
        src: '/assets/images/home/buyers-rankins.jpg',
        title: 'Buy, play and win!',
      },
    };
  }
}
