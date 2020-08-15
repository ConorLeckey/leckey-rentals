import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car-service.service';
import { ActivatedRoute } from '@angular/router';
import { RefreshDetailsService } from '../services/refresh-details.service';
import {ICar} from '../models/car.model';
import {BookingDialogComponent} from '../booking-dialog/booking-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  car: ICar;
  dayCount = 1;
  constructor(private carService: CarService, private route: ActivatedRoute, private refresher: RefreshDetailsService, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.car = this.carService.getCar(+this.route.snapshot.params.id);

    this.refresher.invokeRefresh.subscribe(id => {
      this.refreshDetail(id);
    });

  }

  refreshDetail(id){
    this.car = this.carService.getCar(id);
  }

  bookClicked() {
    this.dialog.open(BookingDialogComponent, {
      width: '678px',
      data: this.car
    });
  }

}
