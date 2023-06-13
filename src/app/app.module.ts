import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { StyleClassModule } from "primeng/styleclass";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//JWT
import { JwtModule } from "@auth0/angular-jwt";
// import { AuthGuardService } from './services/auth-guard.service';
import { NavComponent } from './shared/nav/nav.component';
import { MessageService } from 'primeng/api';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
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
