import { Injectable } from '@angular/core';
import { Evento } from '../recursos/Evento';
import { EVENTOS } from '../eventos/mock-eventos';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  getEventos(): Observable<Evento[]> {
    return of(EVENTOS);
  }
}
