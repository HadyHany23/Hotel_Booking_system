import { Component, OnInit } from '@angular/core';
import { HotelsList } from '../interfaces/HotelsList';
import { HotelsListService } from '../services/hotels-list.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  hotlist: HotelsList[] = [];

  constructor(private service: HotelsListService) {}

  ngOnInit(): void {
    this.hotlist = this.service.getItems();
  }
}
