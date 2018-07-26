import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

import { Socio } from '../recursos/socio';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  googleLogin(): void {
    const socioPrueba = this.authService.doLoginGoogle();
    // console.log('Eres: ', socioPrueba.nombre);
  }

}
