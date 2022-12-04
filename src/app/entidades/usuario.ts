export class Usuario {


  constructor(
    public nombre: string,  public password: string, )
    {
  this.nombre=nombre;
  this.password=password;
    }


    public toString(): string {
      return `Nombre: ${this.nombre}, Contraseña: ${this.password}`;
    }
    }
