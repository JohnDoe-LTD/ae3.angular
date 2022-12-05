import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { PagesRoutingModule } from './pages.routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    GamesComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[]
})
export class PagesModule { }
