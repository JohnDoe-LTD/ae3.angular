import { Component, Inject } from '@angular/core';
import { PageLinkList } from '../../models/page-link';

@Component({
  selector: 'app-site-map-card',
  templateUrl: './site-map-card.component.html',
  styleUrls: ['./site-map-card.component.css']
})
export class SiteMapCardComponent {

  constructor(@Inject("PAGE_LINK_LIST") public model: PageLinkList){}
}
