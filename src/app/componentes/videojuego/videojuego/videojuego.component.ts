import { Component, Input, OnInit } from '@angular/core';
import { Videojuego } from '../../../entidades/videojuego';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit {

   @Input() videojuego : Videojuego;

  constructor() { }

  ngOnInit() {
  }

}
