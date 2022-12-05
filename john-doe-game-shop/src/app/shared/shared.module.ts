import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterModule } from './footer/footer.module';
import { FooterComponent } from './footer/components/footer/footer.component';
import { AddressCardComponent } from './footer/components/address-card/address-card.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GamesTableComponent } from './games-table/games-table.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    HeroComponent,
    ContentSectionComponent,
    ContactFormComponent,
    GamesTableComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    AddressCardComponent,
    ContentSectionComponent,
    ContactFormComponent,
    GamesTableComponent
  ]
})
export class SharedModule { }
