import {Component, Input, OnInit} from '@angular/core';
import {ICar} from './models/car.model';

@Component({
  selector: 'app-car-thumbnail',
  template: `<div [routerLink]="['/cars', car.id]" class="well thumbnail">
    <img [src]="car?.imageUrl" [alt]="car.name">
    <h1>{{ car?.name }}</h1>
  </div>
  `,
  styles: [`
  .thumbnail {min-height: 210px}
  img {max-width: 100%}`]
})
export class CarThumbnailComponent implements OnInit {

  @Input() car: ICar;
  constructor() { }

  ngOnInit() {
  }

  standardDate(date: Date) {
    return date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
  }
}
