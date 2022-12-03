import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GamesTableComponent } from './components/games-table/games-table.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HeroComponent } from './hero/hero.component';
import { FooterModule } from './footer/footer.module';
import { FooterComponent } from './footer/components/footer/footer.component';
import { AddressCardComponent } from './footer/components/address-card/address-card.component';

@NgModule({
  declarations: [
    MenuComponent,
    GameCardComponent,
    GamesTableComponent,
    HeaderComponent,
    UserDetailsComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    GameCardComponent,
    GamesTableComponent,
    HeaderComponent,
    UserDetailsComponent,
    HeroComponent,
    FooterComponent,
    AddressCardComponent,
  ]
})
export class SharedModule { }
