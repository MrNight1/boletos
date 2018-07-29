import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TblPruebaItem {
  name: string;
  id: number;
  noBoletos: number;
  status: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TblPruebaItem[] = [
  /*{status: 'falta', tickets: 10, id: 1, name: 'Hydrogen'},
  {status: 'falta', tickets: 10, id: 2, name: 'Helium'},
  {status: 'falta', tickets: 10, id: 3, name: 'Lithium'},
  {status: 'falta', tickets: 10, id: 4, name: 'Beryllium'},
  {status: 'falta', tickets: 10, id: 5, name: 'Boron'},
  {status: 'falta', tickets: 10, id: 6, name: 'Carbon'},
  {status: 'falta', tickets: 10, id: 7, name: 'Nitrogen'},
  {status: 'falta', tickets: 10, id: 8, name: 'Oxygen'},
  {status: 'falta', tickets: 10, id: 9, name: 'Fluorine'},
  {status: 'falta', tickets: 10, id: 10, name: 'Neon'},
  {status: 'falta', tickets: 10, id: 11, name: 'Sodium'},
  {status: 'falta', tickets: 10, id: 12, name: 'Magnesium'},
  {status: 'falta', tickets: 10, id: 13, name: 'Aluminum'},
  {status: 'falta', tickets: 10, id: 14, name: 'Silicon'},
  {status: 'falta', tickets: 10, id: 15, name: 'Phosphorus'},
  {status: 'falta', tickets: 10, id: 16, name: 'Sulfur'},
  {status: 'falta', tickets: 10, id: 17, name: 'Chlorine'},
  {status: 'falta', tickets: 10, id: 18, name: 'Argon'},
  {status: 'falta', tickets: 10, id: 19, name: 'Potassium'},
  {status: 'falta', tickets: 10, id: 20, name: 'Calcium'},*/
];

/**
 * Data source for the TblPrueba view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TblPruebaDataSource extends DataSource<TblPruebaItem> {
  // data: TblPruebaItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort, private data: TblPruebaItem[]) {
    super();
    console.log('Recibi: ', this.data);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TblPruebaItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TblPruebaItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TblPruebaItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
