import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto/contacto.component';
import { VideojuegosComponent } from './componentes/videojuegos/componentes/Videojuegos/videojuegos.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros/sobrenosotros.component';
import { LoginComponent } from './componentes/login/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'inicio',
    component: VideojuegosComponent,
  },
  {
    path: 'sobrenosotros',
    component: SobrenosotrosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
