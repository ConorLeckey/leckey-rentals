import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrollService} from '../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('slogan1') slogan1;
  @ViewChild('slogan2') slogan2;
  @ViewChild('slogan3') slogan3;
  @ViewChild('carsHeader') carsHeader;

  imageCounter = 0;
  images = ['jaguar', 'bugatti', 'ferrari', 'lambo'];
  imageURL = 'url(\'assets/jaguar.jpg\')';
  cars;


  constructor(private route: ActivatedRoute, private scroll: ScrollService) {
  }

  ngOnInit() {
    this.cars = this.route.snapshot.data.cars;
    this.scroll.scrollSubject.subscribe(((value) => this.scrollTo(value)));
  }

  changeImage(direction) {
    if (direction === 'forward') {
      this.imageCounter++;
    } else if (direction === 'back') {
      this.imageCounter--;
    } else {
      return null;
    }
    if (this.imageCounter > 3) {
      this.imageCounter = 0;
    } else if (this.imageCounter < 0) {
      this.imageCounter = 3;
    }
    this.imageURL = 'url(\'assets/' + this.images[this.imageCounter] + '.jpg\')';

    switch (this.imageCounter) {
      case 0:
        this.populateSlogan('DRIVE', 'YOUR', 'FANTASY');
        break;
      case 1:
        this.populateSlogan('DISCOVER', 'ULTIMATE', 'SPEED');
        break;
      case 2:
        this.populateSlogan('LIVE', 'YOUR', 'WAY');
        break;
      case 3:
        this.populateSlogan('FIND', 'THE', 'BEST');
        break;
    }
  }

  populateSlogan(slogan1, slogan2, slogan3) {
    this.slogan1.nativeElement.innerText = slogan1;
    this.slogan2.nativeElement.innerText = slogan2;
    this.slogan3.nativeElement.innerText = slogan3;
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  scrollTo(value) {
    if (value === 'cars') {
      window.scrollTo({top: this.carsHeader.nativeElement.offsetTop - 80, behavior: 'smooth'});
    } else {
      this.scrollToTop();
    }
  }
}
