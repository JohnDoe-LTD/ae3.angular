import { Component, Input } from '@angular/core';
import { Figure } from '../shared.models';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent {
  @Input() public figure: Figure | undefined;
  @Input() public title: string = '';

  constructor(){}
}
