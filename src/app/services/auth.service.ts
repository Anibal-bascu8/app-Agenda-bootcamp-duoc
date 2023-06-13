import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

// Acciones
import { baseUrl } from 'src/environments/environments';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { catchError, map, Observable, of, tap } from 'rxjs';


interface Auth {
  rut: string
  contrasena: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseRuta: string = "auth"

  private url = 'auth/login'
  private user?: Usuario
  constructor(
    private api: ApiService,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private http: HttpClient
  ) {

  }



  login(data) {

    return this.api.post(this.url, data).subscribe(
      (r: any) => {

        if (r.success) {

          this.user = {
            rut: r.data.rut,
            contrasena: r.data.contrasena,
            nombre: r.data.nombre,
            apellido: r.data.apellido,
            email: r.data.email
          }


          localStorage.setItem('usuario', JSON.stringify(r.data))
          this.router.navigate(['home'])
        } else {
        }
      })
  }


  logout() {
    this.user = undefined
    localStorage.removeItem('usuario')
  }

  setUser(user: any) {
    this.user = user;
  }

  getUser() {

    const localUser = JSON.parse(localStorage.getItem('usuario'))


    this.user = {
      rut: localUser.rut,
      contrasena: localUser.contrasena,
      nombre: localUser.nombre,
      apellido: localUser.apellido,
      email: localUser.email
    }

    return this.user;
  }




  checkAuthentication(): boolean {


    const localUser = JSON.parse(localStorage.getItem('usuario'))

    if (!localUser) {
      return false
    }else{
      return true
    }

  }
}
