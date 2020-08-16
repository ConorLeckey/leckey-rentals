import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {CarService} from '../services/car-service.service';


@Injectable({
  providedIn: 'root'
})
export class CarDetailsRouteActivatorService implements CanActivate {

  constructor(private carService: CarService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) { // Determines whether to navigate to the car details page or 404
    const carExists = !!this.carService.getCar(+route.params.id);

    if (!carExists) {
      this.router.navigate(['/404']);
    }
    return carExists;
  }
}
