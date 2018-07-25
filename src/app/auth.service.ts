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
    id: 0,
    nombre: '',
    rango: '',
    foto: '',
    tipo: 'normal',
    token: '',
    email: ''
   };

  constructor(public afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone) { }

  doLoginGoogle() {
    // For firestore
    const db = firebase.firestore();
    // Advice from the console
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(
      (success) => {
        this.usuario.nombre = success.user.displayName;
        this.usuario.foto   = success.user.photoURL;
        this.usuario.token  = success.user.uid;
        this.usuario.email  = success.user.email;

        this.sendToken(this.usuario.token);
        // this.ngZone.run(() => this.router.navigate(['/perfil']));

      db.collection('socios').doc(this.usuario.token).set({
          nombre: this.usuario.nombre,
          email: this.usuario.email,
          fotoURL: this.usuario.foto,
          token: this.usuario.token,
          rango: this.usuario.rango,
          tipo: this.usuario.tipo,
          id: this.usuario.id
        }).then( function() {
          console.log('Exito');
        }).catch( (error) => {
          console.error('ERROR: ', error);
        });
        this.ngZone.run( () => this.router.navigate(['/perfil']));
      })
      .catch( (err) => {
        console.log('Error: ', err);
      }
    );
  }

  sendUsuario(socio: Socio) {
    // localStorage.setItem('socio', );
  }

  getUsuario(): Socio {
    let socData = null;
    // For firestore
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    const docSocioRef = db.collection('socios').doc(this.getToken());
    docSocioRef.get().then(function (doc) {
      if (doc.exists) {
        console.log('Datos: ', doc.data().nombre);
        socData = doc.data();
        console.log('Tipo de socData: ', typeof(socData));
        console.log('Tipo de socData: ', socData.nombre);
        /*this.usuario.id     = socData.id;
        this.usuario.nombre = socData.nombre;
        this.usuario.rango  = socData.rango;
        this.usuario.foto   = socData.fotoURL;
        this.usuario.tipo   = socData.tipo;
        this.usuario.token  = socData.token;
        this.usuario.email  = socData.email;*/
        return socData;
      } else {
        console.log('No existe el usuario');
      }
    }).catch((error) => {
      console.log('Error getting socio data ', error);
    });
    // if (socData != null) {

      console.log('Error getting socio data ', socData);
    // }
    return this.usuario;
  }

  sendToken (token: string) {
    localStorage.setItem('LoggedInUser', token);
  }
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

}
