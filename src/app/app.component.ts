import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-jfm';

  menuItems: any = [
    {
      label: 'Inicio',
      icon: 'pi pi-home mr-2',
      routerLink: ['/home'],
      descripcion: 'Pagina de Inicio'
    },
    // {
    //   label: 'Login',
    //   icon: 'pi pi pi-cog mr-2',
    //   routerLink: ['/login'],
    //   descripcion: 'Configuracion del sistema'
    // },

  ];



  constructor(
    private authservice: AuthService,

  ) {
  }

  ngOnInit() {
    // const cosa = this.authservice.checkAuthentication()

  }



}
