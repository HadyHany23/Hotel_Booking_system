import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelsComponent } from './hotels/hotels.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'addhot', component: AddHotelComponent },
  { path: 'hotel', component: HotelsComponent },
  { path: 'addemp', component: AddEmployeeComponent },
  { path: 'emp', component: EmployeesComponent },
];
