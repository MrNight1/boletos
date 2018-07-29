import { Component, OnInit } from '@angular/core';
import { Evento } from '../recursos/Evento';
import { EventoService } from '../services/evento.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {
  eventos: Observable<Evento[]>;
  selectedEvent: Evento;

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.getEventos();
  }

  onSelect(evento: Evento): void {
    this.selectedEvent = evento;
  }

  getEventos(): void {
      this.eventos = this.eventoService.getEventos();
  }

}
