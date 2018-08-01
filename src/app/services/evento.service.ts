import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Evento } from '../recursos/Evento';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private db: AngularFirestore) {  }

  addEvento(evento: Evento): void {
    console.log('Agregar evento: ', evento.nombre);
    // For firestore
    const db = firebase.firestore();
    // Advice from the console
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);
    db.collection('eventos').add({
      nombre: evento.nombre,
      fecha: evento.fecha,
      inversion: evento.inversion,
      totalBoletos: evento.totalBoletos
    }).then( (docRef) => {
      console.log('Exito al agrega ID: ', docRef.id);
    });
  }

  getEventos(): Observable<Evento[]> {
    let eventos: Observable<Evento[]>;

    // This is one way for getting data without documents id

    /*this.items = af.collection('eventos').valueChanges();
    this.items.subscribe(result => {
      console.log('Array content: ', result);
    });*/

    // This is another way for getting but it includes id documents
    eventos = this.db.collection('eventos').snapshotChanges().pipe(map(
      changes => {
        return changes.map( a => {
          const data = a.payload.doc.data() as Evento;
          data.id = a.payload.doc.id;
          return data;
        });
      }
    ));
    // This is the way for operate into an observable when it is not null or empty
    eventos.subscribe(result => {
      console.log('Array content: ', result);
    });

    return eventos;
  }

  getEvento(id: string): any {
    return this.db.doc('eventos/' + id).valueChanges();
  }
}
