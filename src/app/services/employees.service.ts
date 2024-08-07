import { Injectable } from '@angular/core';
import { EmployeesList } from '../interfaces/EmployeesList';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  emplist: EmployeesList[] = [
    {
      empname: 'ahmed',
      empemail: 'ahmed12@gmail.com',
      emppassword: '1234',
    },
    {
      empname: 'mohamed',
      empemail: 'mo11@gmail.com',
      emppassword: '12345',
    },
    {
      empname: 'aly',
      empemail: 'aly66@gmail.com',
      emppassword: '123456',
    },
    {
      empname: 'sami',
      empemail: 'sami55@gmail.com',
      emppassword: '1234567',
    },
  ];

  private filteredData: EmployeesList[] = [...this.emplist];

  getItems(): EmployeesList[] {
    return this.emplist;
  }

  sortData(column: keyof EmployeesList, ascending: boolean): EmployeesList[] {
    return this.emplist.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return ascending ? valueA - valueB : valueB - valueA;
      } else {
        return ascending
          ? valueA.toString().localeCompare(valueB.toString())
          : valueB.toString().localeCompare(valueA.toString());
      }
    });
  }

  filterData(searchTerm: string): EmployeesList[] {
    if (!searchTerm) {
      this.filteredData = [...this.emplist];
    } else {
      this.filteredData = this.emplist.filter((person) =>
        Object.values(person).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    return this.filteredData;
  }

  constructor() {}
}
