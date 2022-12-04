import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from '../../../entidades/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  listaUsuario: Usuario[] = [];
  usuario: Usuario | null = null;

  @Input()  nombre: string = '';
  password: string = '';
  mensaje: string ="";

  constructor() {
    let usuario: Usuario = new Usuario('usuario', 'usuario');
    this.listaUsuario.push(usuario);
    usuario = new Usuario('Maria', '1234');
    this.listaUsuario.push(usuario);
    usuario = new Usuario('Pepe', 'Patata');
    this.listaUsuario.push(usuario);
  }

  public login() {

   this.usuario=new Usuario(this.nombre,this.password);
    for(let a=0; a<this.listaUsuario.length; a++){
      let usuarioAux : Usuario = this.listaUsuario[a]
      if(usuarioAux.nombre == this.nombre && usuarioAux.password == this.password){

        this.mensaje="login exitoso";
        console.log(this.mensaje);


        //Me falta redirigir a inicio

      }
      else
      this.mensaje="Error en el login";

      console.log(this.mensaje);
  }   return this.usuario;}

  ngOnInit() {}
}
