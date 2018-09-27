import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  constructor(private db: AngularFirestore) { }

  /*addEvento(evento: Evento): void {
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
  }*/

  getBoletos(idEvento: string): Observable<any[]> {
    let eventos: Observable<any[]>;

    // This is one way for getting data without documents id

    /*this.items = af.collection('eventos').valueChanges();
    this.items.subscribe(result => {
      console.log('Array content: ', result);
    });*/

    // This is another way for getting but it includes id documents
    eventos = this.db.collection('eventos/' + idEvento + '/boletos').snapshotChanges().pipe(map(
      changes => {
        return changes.map( a => {
          const data = a.payload.doc.data();
          data['id'] = a.payload.doc.id;
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
}
