import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Socio } from './recursos/socio';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  doLoginGoogle(): Socio {
    const usuario: Socio = {
      id: null,
      nombre: '',
      rango: '',
      foto: '',
      tipo: 'normal',
      token: ''
    };

    console.log('Login Google ');

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    this.afAuth.auth.signInWithPopup(provider).then(function(result) {
      // var token = result.credential.accessToken;
      // var user = result.user;
      // console.log('user: ', result);
      usuario.nombre = result.user.displayName;
      usuario.foto = result.user.photoURL;
      usuario.token = result.user.uid;

    }).catch(function(error) {
      // var errorCode = error.code;
      // var errorMsg = error.message;
      // var email = error.email;
      // var credential = error.credential;
    });
    return usuario;

  }

  // getSocio(): Socio {

  // }
}
