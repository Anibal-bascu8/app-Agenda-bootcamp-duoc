import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(
    
    private apiAuth: AuthService
    ) {

  }

  rut: string = ''
  contrasena: string = ''

  sendLogin() {

    const data = {
      "rut": this.rut,
      "contrasena": this.contrasena
    }

    this.apiAuth.login(data)
  }
}
