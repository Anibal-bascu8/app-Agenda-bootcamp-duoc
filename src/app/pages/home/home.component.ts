import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  items: any

  constructor(private menuItems: AppComponent) {

    this.items = [
      {
        label: 'Administracion',
        icon: 'pi pi-exclamation-circle mr-2',
        routerLink: ['/faenas'],
        descripcion: 'Administracion del sistema'
      },
      {
        label: 'Acceso trabajadores',
        icon: 'pi pi-exclamation-circle mr-2',
        routerLink: ['/trabajadores'],
        descripcion: 'Control y seguimiento de faenas'
      },
      // {
      //   label: 'Analisis de Gases',
      //   icon: 'pi pi-exclamation-circle mr-2',
      //   routerLink: ['/home'],
      //   descripcion: 'Administracion y seguimiento a analisis de gases'
      // },
      // {
      //   label: 'Control de Incendios',
      //   icon: 'pi pi-check-circle mr-2',
      //   routerLink: ['/home'],
      //   descripcion: 'Plan de control de incendios'
      // },
      // {
      //   label: 'Equipo de extintores',
      //   icon: 'pi pi-tag mr-2',
      //   routerLink: ['/home'],
      //   descripcion: 'Administracion y seguimiento a equipo de extintores'
      // },
    ]
  }

}

