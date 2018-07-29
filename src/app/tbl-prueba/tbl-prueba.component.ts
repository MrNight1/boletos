import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TblPruebaDataSource } from './tbl-prueba-datasource';
import { Observable } from 'rxjs';
import { BoletoService } from '../services/boleto.service';

@Component({
  selector: 'app-tbl-prueba',
  templateUrl: './tbl-prueba.component.html',
  styleUrls: ['./tbl-prueba.component.css']
})
export class TblPruebaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TblPruebaDataSource;

  boletos: any[];
  constructor(private boletoService: BoletoService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'tickets', 'status'];

  ngOnInit() {
    // this.boletos = this.boletoService.getBoletos('Axnp9nlgXLt5g56mgm0y');
    this.boletoService.getBoletos('Axnp9nlgXLt5g56mgm0y').subscribe(
      result => {
        this.boletos = result;
        this.dataSource = new TblPruebaDataSource(this.paginator, this.sort, result);
      }
    );
    // this.dataSource = new TblPruebaDataSource(this.paginator, this.sort, this.boletos);
  }
}
