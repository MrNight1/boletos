import { Component, OnInit } from '@angular/core';
import { Evento } from '../recursos/Evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {
  eventos: Evento[];
  selectedEvent: Evento;

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.getEventos();
  }

  onSelect(evento: Evento): void {
    this.selectedEvent = evento;
  }

  getEventos(): void {
    // this.eventos = this.eventoService.getEventos();
    this.eventoService.getEventos()
      .subscribe(eventos => this.eventos = eventos);
  }

}
