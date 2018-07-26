import { Component, OnInit } from '@angular/core';
import { Evento } from '../recursos/Evento';
import { EVENTOS } from './mock-eventos';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {
  eventos = EVENTOS;
  selectedEvent: Evento;

  constructor() { }

  ngOnInit() {
  }

  onSelect(evento: Evento): void {
    this.selectedEvent = evento;
  }

}
