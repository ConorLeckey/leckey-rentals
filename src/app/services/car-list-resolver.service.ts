import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {CarService} from './car-service.service';

@Injectable({
  providedIn: 'root'
})
export class CarListResolverService implements Resolve<any> {

  constructor(private carService: CarService) {

  }

  resolve() {
    return this.carService.getCars(); // returns car array
  }
}
