import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { FaenasComponent } from './pages/faenas/faenas.component';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Inicio',
      expectedRole: ['admin', 'user']
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'faenas',
    component: FaenasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'trabajadores',
    component: TrabajadoresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vehiculos',
    component: VehiculosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent,
    canActivate: [AuthGuard]

  },
  // {
  //   path: '**',
  //   component: HomeComponent,
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
