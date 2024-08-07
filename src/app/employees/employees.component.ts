import { Component } from '@angular/core';
import { EmployeesList } from '../interfaces/EmployeesList';
import { EmployeesService } from '../services/employees.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  emplist: EmployeesList[] = [];
  ascending: boolean = true;
  searchTerm: string = '';

  constructor(private service: EmployeesService) {}

  ngOnInit(): void {
    this.emplist = this.service.getItems();
  }

  sort(column: keyof EmployeesList): void {
    this.emplist = this.service.sortData(column, this.ascending);
    this.ascending = !this.ascending;
  }

  filter(): void {
    this.emplist = this.service.filterData(this.searchTerm);
  }
}
