import { Component } from '@angular/core';
import { Figure, Image } from 'src/app/shared/shared.models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  public figure: Figure | undefined;
  public image: Image | undefined;

  constructor(private title: Title) {

    this.title.setTitle("John Doe's Game Shop | Contact");

    this.image = {
      alt: 'John\'s Doe support!',
      src: '/assets/images/contact/hero.jpg',
      title: 'Everything you need to know about us',
    };

    this.figure = {
      caption: 'What do you need to know about us?',
      image: {
        alt: 'Team members',
        src: '/assets/images/contact/team.jpg',
        title: 'John\'s Doe family',
      },
    };
  }
}
