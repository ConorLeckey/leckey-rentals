import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ICar} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCars(): Observable<ICar[]> {
    const subject = new Subject<ICar[]>();
    setTimeout(() => {
      subject.next(cars);
      subject.complete();
    }, 100);
    return subject;
  }

  getCar(id): ICar {
    return cars.find(car => car.id === id);
  }
}

const cars: ICar[] = [
  {
    id: 1,
    name: 'Lamborghini Huracan',
    pricePerDay: 535,
    imageUrl: 'assets/huracan.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturi quos sunt. Debitis, maiores, voluptate. ' +
      'Alias assumenda cupiditate debitis delectus deleniti facilis fuga molestias necessitatibus nemo, numquam officiis placeat ' +
      'quam quis, quo reprehenderit saepe sunt'
  },
  {
    id: 2,
    name: 'Jaguar F-Type',
    pricePerDay: 520,
    imageUrl: 'assets/ftype.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturi quos sunt. Debitis, maiores, voluptate. ' +
      'Alias assumenda cupiditate debitis delectus deleniti facilis fuga molestias necessitatibus nemo, numquam officiis placeat ' +
      'quam quis, quo reprehenderit saepe sunt'
  },
  {
    id: 3,
    name: 'Bentley Continental GTC',
    pricePerDay: 650,
    imageUrl: 'assets/continentalgt.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturi quos sunt. Debitis, maiores, voluptate. ' +
      'Alias assumenda cupiditate debitis delectus deleniti facilis fuga molestias necessitatibus nemo, numquam officiis placeat ' +
      'quam quis, quo reprehenderit saepe sunt'
  },
  {
    id: 4,
    name: 'Bugatti Veyron 16.4',
    pricePerDay: 535,
    imageUrl: 'assets/veyron2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturi quos sunt. Debitis, maiores, voluptate. ' +
      'Alias assumenda cupiditate debitis delectus deleniti facilis fuga molestias necessitatibus nemo, numquam officiis placeat ' +
      'quam quis, quo reprehenderit saepe sunt'
  },
  {
    id: 5,
    name: 'Bugatti Veyron 2010',
    pricePerDay: 500,
    imageUrl: 'assets/veyron.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturi quos sunt. Debitis, maiores, voluptate. ' +
      'Alias assumenda cupiditate debitis delectus deleniti facilis fuga molestias necessitatibus nemo, numquam officiis placeat ' +
      'quam quis, quo reprehenderit saepe sunt'
  },
];