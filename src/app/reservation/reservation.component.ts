import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
// import 'ag-grid-enterprise';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent {
  rowData = [
    { hotel: 'novotel', price: 33850, electric: false },
    { hotel: 'barcelo', price: 31850, electric: true },
    { hotel: 'hilton', price: 64950, electric: true },
    { hotel: 'baron', price: 29600, electric: false },
  ];

  colDefs: ColDef[] = [
    { field: 'hotel', headerName: 'hotel name' },
    { field: 'price' },
    { field: 'electric', headerName: 'select hotel' },
  ];
}
