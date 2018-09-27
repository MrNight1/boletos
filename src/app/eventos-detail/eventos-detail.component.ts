import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../recursos/Evento';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos-detail',
  templateUrl: './eventos-detail.component.html',
  styleUrls: ['./eventos-detail.component.css']
})
export class EventosDetailComponent implements OnInit {
  // @Input() event: Evento;
  event: Evento;
  contador = 0;
  bandera = false;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    /*private location: Location*/
  ) { }

  ngOnInit() {
    this.getEvento();
  }

  getEvento(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventoService.getEvento(id).subscribe(
      (result) => {
        const ev: Evento = new Evento(id, result.nombre, result.fecha, result.inversion, result.totalBoletos);
        this.event = ev;
      }
    );
  }

  incrementar() {
    this.contador++;
    this.activarBandera();
  }

  decrementar() {
    this.contador--;
    this.activarBandera();
  }

  activarBandera() {
    if (this.contador === 0) {
      this.bandera = false;
    } else {
      this.bandera = true;
    }
  }

}
