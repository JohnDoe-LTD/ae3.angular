import { Component, OnInit } from '@angular/core';
import { Videojuego} from 'src/app/entidades/videojuego';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[] = []
  videojuego : Videojuego | null = null



  constructor() {
    let videojuego : Videojuego = new Videojuego("Super Mario Galaxy", "Nintendo","Actividad_3\src\assets\media\superMarioGalaxy.jpg",8)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Half Life", "Valve", "Actividad_3\src\assets\media\halfLife.webp",9)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego("Dark Souls", "FromSoftware", "Actividad_3\src\assets\media\DarkSouls3.jpgn",6)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego("League Of Legends", "Riot", "Actividad_3\src\assets\media\LoL.jpg",0)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego("Minecraft", "Mojang", "Actividad_3\src\assets\media\Minecraft.png",7)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego("Pokemon Escarlata", "FromSoftware", "Actividad_3\src\assets\media\PokemonEscarlata.png",2)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego("Shadow Of The Colossus", "FromSoftware", "Actividad_3\src\assets\media\ShadowOfTheColossus.jpg",10)
    this.listaVideojuegos.push(videojuego)
  }

  public seleccionar(videojuego : Videojuego) : void{
    console.log(videojuego)


  }


  ngOnInit() {

  }

}
