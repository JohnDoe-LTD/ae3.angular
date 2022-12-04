import { Component } from '@angular/core';
import { Figure, Image } from 'src/app/shared/shared.models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public figure1: Figure | undefined;
  public figure2: Figure | undefined;
  public figure3: Figure | undefined;
  public image: Image | undefined;

  constructor(private title: Title){

    this.title.setTitle("John Doe's Game Shop | About Us");

    this.image = {
      alt: 'John\'s Doe team!',
      src: '/assets/images/about/hero.jpg',
      title: 'More than a simple company,  a big family',
    };

    this.figure1 = {
      caption: 'Who are we?',
      image: {
        alt: 'Team members',
        src: '/assets/images/about/team.jpg',
        title: 'John\'s Doe family',
      },
    };

    this.figure2 = {
      caption: 'How do we do it?',
      image: {
        alt: 'Orders life-cycle',
        src: '/assets/images/about/workers.jpg',
        title: 'How we attend the orders',
      },
    };

    this.figure3 = {
      caption: 'Where can you find us?',
      image: {
        alt: 'John\'s Doe Head Quarters',
        src: '/assets/images/about/shops.jpg',
        title: 'Know Our head quarters!',
      },
    };
  }
}
