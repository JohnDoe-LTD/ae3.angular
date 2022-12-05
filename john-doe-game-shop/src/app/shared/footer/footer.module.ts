import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { SiteMapCardComponent } from './components/site-map-card/site-map-card.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddressCardComponent,
    SiteMapCardComponent,
    SocialMediaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AddressCardComponent,
    SiteMapCardComponent,
    SocialMediaComponent,
    FooterComponent,
  ]
})
export class FooterModule {}
