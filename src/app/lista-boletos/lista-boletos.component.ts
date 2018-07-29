import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../recursos/Evento';
import { BoletoService } from '../services/boleto.service';

export interface Boleto {
  nombre: string;
  noBoletos: number;
  estado: string;
}

@Component({
  selector: 'app-lista-boletos',
  templateUrl: './lista-boletos.component.html',
  styleUrls: ['./lista-boletos.component.css']
})
export class ListaBoletosComponent implements OnInit {
  @Input() event: Evento;

  constructor(private boletosService: BoletoService) { }

  displayColumns: string[] = ['nombre', 'noBoletos', 'estado'];
  dataSource: Boleto[] = [];
  ngOnInit() {
    this.boletosService.getBoletos('Axnp9nlgXLt5g56mgm0y').subscribe(
      (result) => this.dataSource = result
    );
  }

  getTotalCost() {
    return this.dataSource.map(t => t.noBoletos).reduce((acc, value) => acc + value, 0);
  }

}
