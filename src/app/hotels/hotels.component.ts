import { Component, OnInit } from '@angular/core';
import { HotelsList } from '../interfaces/HotelsList';
import { HotelsListService } from '../services/hotels-list.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css',
})
export class HotelsComponent implements OnInit {
  hotlist: HotelsList[] = [];
  ascending: boolean = true;
  searchTerm: string = '';

  constructor(private service: HotelsListService) {}

  ngOnInit(): void {
    this.hotlist = this.service.getItems();
  }

  sort(column: keyof HotelsList): void {
    this.hotlist = this.service.sortData(column, this.ascending);
    this.ascending = !this.ascending;
  }

  filter(): void {
    this.hotlist = this.service.filterData(this.searchTerm);
  }
}
