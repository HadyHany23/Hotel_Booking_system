import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelsComponent } from './hotels/hotels.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'hotel', component: HotelsComponent },

];
