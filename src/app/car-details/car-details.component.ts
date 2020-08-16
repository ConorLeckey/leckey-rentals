import {Component, OnInit} from '@angular/core';
import {CarService} from '../services/car-service.service';
import {ActivatedRoute} from '@angular/router';
import {ICar} from '../models/car.model';
import {BookingDialogComponent} from '../booking-dialog/booking-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  car: ICar;
  dayCount = 1; // This day counter is linked to the 'number of days' field and is used to estimate the price

  constructor(private carService: CarService, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.car = this.carService.getCar(+this.route.snapshot.params.id);
    // This gets the car object from the service using the id provided in the url
  }

  bookClicked() { // On the click of the book now button, the booking dialog opens injecting the car data for use
    this.dialog.open(BookingDialogComponent, {
      width: '678px',
      data: this.car
    });
  }

}
