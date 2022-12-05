import { Component, Inject } from '@angular/core';
import { SocialMediaList } from '../../models/social-media';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  constructor(@Inject("SOCIAL_MEDIA_LIST") public model: SocialMediaList){}
}
