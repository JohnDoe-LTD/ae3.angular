import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app.routing.module';
import { CompanyAddress } from './shared/footer/models/company-address';
import { PageLinkList } from './shared/footer/models/page-link';
import { SocialMediaList } from './shared/footer/models/social-media';

// TODO: optimizar la inyección
const COMPANY_ADDRESS: CompanyAddress = {
  address: 'Elm streat 22',
  city: 'Long Island',
  companyName: "John Doe's Game Shop",
  country: 'USA',
  email: 'hello@jd-gameshop.com',
  phone: '+1 555-555-555',
  state: 'New York',
  website: 'https://js-gameshop.com',
  zipCode: '98563',
};

const PAGE_LINK_LIST: PageLinkList = {
  title: 'Site map',
  items: [
    { url: '/', label: 'Home' },
    { url: '/about', label: 'About' },
    { url: '/contact', label: 'Contact' },
    { url: '/games', label: 'Games' },
    { url: '/login', label: 'Login' },
  ],
};

const SOCIAL_MEDIA_LIST: SocialMediaList = {
  title: 'Follow us!',
  items: [
    {
      src: '/assets/images/social/instagram.png',
      alt: 'Instagram',
      title: 'Follow us on Instagram!',
      url: 'https://instagram.com',
    },
    {
      src: '/assets/images/social/tiktok.png',
      alt: 'Tiktok',
      title: 'Follow us on Tiktok!',
      url: 'https://tiktok.com',
    },
    {
      src: '/assets/images/social/twitter.png',
      alt: 'Twitter',
      title: 'Follow us on Twitter!',
      url: 'https://twitter.com',
    },
  ],
};

const socalMediaList = {
  provide: 'SOCIAL_MEDIA_LIST',
  useValue: SOCIAL_MEDIA_LIST,
};

const pageLinkList = {
  provide: 'PAGE_LINK_LIST',
  useValue: PAGE_LINK_LIST,
};

const companyAddress = {
  provide: 'COMPANY_ADDRESS',
  useValue: COMPANY_ADDRESS,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [companyAddress, pageLinkList, socalMediaList],
  bootstrap: [AppComponent],
})
export class AppModule {}
