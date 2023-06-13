import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit{
  
  
  @Input() menuItems: any;

  user?: Usuario


  constructor(
    private authservice: AuthService,
    private router: Router
  ){

      
    
  }

  ngOnInit() {
    // Obtiene el objeto de usuario desde el servicio
    this.user = this.authservice.getUser();

  }


  onLogOut(){
    this.authservice.logout()
    this.router.navigate(['login'])
  }
}
