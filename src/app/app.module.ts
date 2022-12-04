import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './componentes/videojuegos/componentes/Videojuegos/videojuegos.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera/cabecera.component';
import { VideojuegoComponent } from "./componentes/videojuego/videojuego/videojuego.component";
import { LoginComponent } from './componentes/login/login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        VideojuegosComponent,
        CabeceraComponent,
        VideojuegoComponent,
        LoginComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule

    ]
})
export class AppModule { }
