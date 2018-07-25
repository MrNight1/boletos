import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TblPruebaDataSource } from './tbl-prueba-datasource';

@Component({
  selector: 'app-tbl-prueba',
  templateUrl: './tbl-prueba.component.html',
  styleUrls: ['./tbl-prueba.component.css']
})
export class TblPruebaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TblPruebaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TblPruebaDataSource(this.paginator, this.sort);
  }
}
