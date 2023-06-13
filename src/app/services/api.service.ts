import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environments';




@Injectable({
  providedIn: 'root'
})
export class ApiService {


  urlaPI = baseUrl.urlapi

  token = ''
  clienteIp = ''

  httpOptions = {};
  httpOptions2 = {};




  constructor(
    private http: HttpClient,
    // private redux: ReduxService,
  ) {


    // this.redux.getEstadoUsuario().subscribe((user: stateUsuario) => {
    //   this.token = user.Token
    //   this.getToken()
    // })





  }




  postOnly(ruta: string, data: any) {
    return this.http.post(ruta, data)
  }
  getOnly(ruta: string) {
    return this.http.get<any>(ruta)
  }


  get(ruta: string) {
    this.getToken()
    let rutax = this.urlaPI + `/${ruta}`
    return this.http.get<any>(rutax, this.httpOptions)
  }
  post(ruta: string, data: any) {
    

    this.getToken()
    return this.http.post(this.urlaPI + `/${ruta}`, data, this.httpOptions)
  }
  put(ruta: string, data: any) {
    this.getToken()
    return this.http.patch(this.urlaPI + `/${ruta}`, data, this.httpOptions)
  }
  delete(ruta: string) {
    this.getToken()
    return this.http.delete(this.urlaPI + `/${ruta}`, this.httpOptions)
  }


  postFiles(ruta: string, data: any) {



    return this.http.post<any>(this.urlaPI + `/${ruta}`, data, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'clientip': `${this.clienteIp}`
      }
    })


  }

  getToken() {




    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        'clientip': `${this.clienteIp}`
      })
    };

  }

  getIpCliente() {
    return this.http.get<any>(`https://api.ipify.org/?format=json&callback=get_ip`)
  }


}
