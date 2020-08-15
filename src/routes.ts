import {Routes} from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {TeamComponent} from './app/team/team.component';
import {ContactComponent} from './app/contact/contact.component';
import {CarListResolverService} from './app/services/car-list-resolver.service';
import {CarDetailsRouteActivatorService} from './app/car-details/car-details-route-activator.service';
import {CarDetailsComponent} from './app/car-details/car-details.component';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, resolve: {cars: CarListResolverService}},
  { path: 'the-team', component: TeamComponent},
  { path: 'contact-us', component: ContactComponent},
  { path: '404', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'cars/:id', component: CarDetailsComponent, canActivate: [CarDetailsRouteActivatorService]},

];
