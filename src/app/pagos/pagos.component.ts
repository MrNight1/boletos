import { Component, OnInit } from '@angular/core';
import { PagoService } from '../services/pago.service';
import { Pago } from '../recursos/pago';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  pagos: Observable<Pago[]>;
  contador: number;

  constructor(private pagoService: PagoService) { }

  ngOnInit() {
    this.getPagos('Axnp9nlgXLt5g56mgm0y');
    this.getTotalPagos();
  }

  getPagos(idEvento: string) {
    // Uncomment when finishes the proof with susbscribe
    this.pagos = this.pagoService.getPagos(idEvento);

    this.pagos.subscribe(
      (result) => console.log('result: ', result)
    );
  }

  getTotalPagos() {
    const total = this.pagos.subscribe(
      res => {
        const x = res.map(t => t.cantidad).reduce((acc, value) => acc + value, 0);
        console.log('res.cantidad = ', res.map(t => t.cantidad));
        console.log('X = ', typeof(x));
        this.contador = x;
      }
    );
  }

}
