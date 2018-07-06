import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Socio } from './recursos/socio';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: Socio = {
    id: null,
    nombre: '',
    rango: '',
    foto: '',
    tipo: 'normal',
    token: ''
   };

  constructor(public afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone) { }

  doLoginGoogle() {

    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(
      (success) => {
        this.usuario.nombre = success.user.displayName;
        this.usuario.foto   = success.user.photoURL;
        this.usuario.token  = success.user.uid;
        console.log('exito');
        this.ngZone.run(() => this.router.navigate(['/perfil']));
      }).catch(
        (err) => {
          console.log('fracaso: ', err);
        // this.error = err;
      });
  }


  getUsuario(): Socio {
    return this.usuario;
  }
}
