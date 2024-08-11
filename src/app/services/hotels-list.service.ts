import { Injectable } from '@angular/core';
import { HotelsList } from '../interfaces/HotelsList';

@Injectable({
  providedIn: 'root',
})
export class HotelsListService {
  hotlist: HotelsList[] = [
    {
      HotelName: 'hilton',
      price: 20,
      locations: 'usa',
    },
    {
      HotelName: 'novotel',
      price: 23,
      locations: 'uk',
    },
    {
      HotelName: 'baroon',
      price: 26,
      locations: 'canada',
    },
    {
      HotelName: 'barcelo',
      price: 29,
      locations: 'egypt',
    },
  ];

  private filteredData: HotelsList[] = [...this.hotlist];

  getItems(): HotelsList[] {
    return this.hotlist;
  }

  sortData(column: keyof HotelsList, ascending: boolean): HotelsList[] {
    return this.hotlist.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return ascending ? valueA - valueB : valueB - valueA;
      } else {
        return ascending ? valueA.toString().localeCompare(valueB.toString()) : valueB.toString().localeCompare(valueA.toString());
      }
    });
  }

  filterData(searchTerm: string): HotelsList[] {
    if (!searchTerm) {
      this.filteredData = [...this.hotlist];
    } else {
      this.filteredData = this.hotlist.filter(person =>
        Object.values(person).some(value =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    return this.filteredData;
  }

  constructor() {}
}
