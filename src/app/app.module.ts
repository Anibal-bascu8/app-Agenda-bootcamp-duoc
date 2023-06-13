import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { StyleClassModule } from "primeng/styleclass";
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//JWT
import { JwtModule } from "@auth0/angular-jwt";
// import { AuthGuardService } from './services/auth-guard.service';
import { NavComponent } from './shared/nav/nav.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { MessageService } from 'primeng/api';
import { FaenasComponent } from './pages/faenas/faenas.component';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VehiculosComponent,
    NavComponent,
    ConfiguracionComponent,
    FaenasComponent,
    TrabajadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StyleClassModule,
    JwtModule.forRoot({
      config: {
        allowedDomains: ["localhost:4200",],
        tokenGetter: () => {
          return localStorage.getItem("token");
        },
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    // AuthGuardService
    MessageService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
