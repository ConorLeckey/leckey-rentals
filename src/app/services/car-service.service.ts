import {Injectable} from '@angular/core';
import {ICar} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCars(): ICar[] { // Returns array of Cars
    return cars;
  }

  getCar(id): ICar {
    return cars.find(car => car.id === id);
  }
}

const cars: ICar[] = [ // Json array of cars (in place of an api call to backend)
  {
    id: 1,
    name: 'Lamborghini Huracan',
    pricePerDay: 535,
    imageUrl: 'assets/huracan.png',
    description: 'The legendary Lamborghini Huracan, the natural leader on the roads wherever it goes. This specific car we have only has' +
      ' two wheels. The other ones fell off when we were joy riding it last week. Of course we wont tell you this until you actual pay ' +
      'and already have the car in your possession.'
  },
  {
    id: 2,
    name: 'Jaguar F-Type',
    pricePerDay: 520,
    imageUrl: 'assets/ftype.png',
    description: 'The Jaguar F-Type. Doesn\'t that speak for itself? No, OK I\'ll write some more about it... Geez. This beautiful car ' +
      'make gets its name from the beautiful beast that is the jaguar. A wild and unstoppable cat you wont want to be on the wrong' +
      ' side of. Seriously, they will claw you to death.'
  },
  {
    id: 3,
    name: 'Bentley Continental GTC',
    pricePerDay: 650,
    imageUrl: 'assets/continentalgt.png',
    description: 'The beautiful, luxurious Bentley Continental. We can promise you ' +
      'this isn\'t just a hounda civic with a fancy paint job. This car' +
      ' is really amazing don\'t listen to anyone, just rent it from us dude please we have bills to pay and mouths to feed. ' +
      'Living doesn\'t come cheap these days seriously.'
  },
  {
    id: 4,
    name: 'Bugatti Veyron 16.4',
    pricePerDay: 535,
    imageUrl: 'assets/veyron2.png',
    description: 'The sweet and sour Veyron 16.4. We can promise you ' +
      'this isn\'t just a hounda civic with a fancy paint job. This car' +
      ' is really amazing don\'t listen to anyone, just rent it from us dude please we have bills to pay and mouths to feed. ' +
      'Living doesn\'t come cheap these days seriously.'
  },
  {
    id: 5,
    name: 'Bugatti Veyron 2010',
    pricePerDay: 500,
    imageUrl: 'assets/veyron.png',
    description: 'The sweet and sour Veyron 2010. We can promise you ' +
      'this isn\'t just a hounda civic with a fancy paint job. This car' +
      ' is really amazing don\'t listen to anyone, just rent it from us dude please we have bills to pay and mouths to feed. ' +
      'Living doesn\'t come cheap these days seriously.'
  },
];
