import { Component, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { LoginComponent } from '../../login/login/login.component';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Input() usuario : Usuario;


}
