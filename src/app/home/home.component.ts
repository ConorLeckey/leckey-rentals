import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrollService} from '../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('slogan1') slogan1; // These viewChilds get the dom element containing the slogans so they can be changed in the TS file
  @ViewChild('slogan2') slogan2;
  @ViewChild('slogan3') slogan3;
  @ViewChild('carsHeader') carsHeader; // This element is retrieved for use in calculating the page height to scroll to for the cars button

  imageCounter = 0; // This image counter corresponds to the image array position
  images = ['jaguar', 'bugatti', 'ferrari', 'lambo']; // This array stores all the image names for the images in the banner
  imageURL = 'url(\'assets/jaguar.jpg\')'; // This is the url for the initial image
  cars = []; // This array will store the cars retrieved through the activated route
  interval; // This interval variable is used to automatically scroll through the images

  constructor(private route: ActivatedRoute, private scroll: ScrollService) {
  }

  ngOnInit() { // This fn is called when the page is loaded
    this.cars = this.route.snapshot.data.cars; // This line gets the cars array passed in through the activated route
    this.scroll.scrollSubject.subscribe(((value) => this.scrollTo(value)));
    // This line above subscribes to the scroll subject in the service, scrolling to the selected place when the button is clicked
    this.startBannerTimer(); // This line starts the timer set for the banner
  }

  changeImage(direction) { // When this fn is called, the banner image changes in the desired direction
    switch (direction) { // This switch case determines the direction to change the image
      case 'forward':
        this.imageCounter++;
        break;
      case 'back':
        this.imageCounter--;
        break;
    }
    if (this.imageCounter > 3) { // this if else block loops the imageCounter should it go above or below array limits
      this.imageCounter = 0;
    } else if (this.imageCounter < 0) {
      this.imageCounter = 3;
    }
    this.imageURL = 'url(\'assets/' + this.images[this.imageCounter] + '.jpg\')'; // This sets the new imageurl for use in the banner

    switch (this.imageCounter) { // This switch case determines the new slogan for each image
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
    this.startBannerTimer(); // This restarts the banner timer
  }

  populateSlogan(slogan1, slogan2, slogan3) { // This function takes in a slogan and sets the slogan element's values
    this.slogan1.nativeElement.innerText = slogan1;
    this.slogan2.nativeElement.innerText = slogan2;
    this.slogan3.nativeElement.innerText = slogan3;
  }

  scrollToTop() { // This function scrolls to the top of the screen when the home buttons are clicked
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  scrollTo(value) { // This function is called and depending on the input, scrolls to the cars or the top
    if (value === 'cars') {
      window.scrollTo({top: this.carsHeader.nativeElement.offsetTop - 80, behavior: 'smooth'});
    } else {
      this.scrollToTop();
    }
  }

  startBannerTimer() { // This function resets the previous timer and sets a new timer to call changeImage every 5s
    this.resetBannerTimer();
    this.interval = setInterval(() => this.changeImage('forward'), 5000);
  }

  resetBannerTimer() { // This function resets the previous timer, should there be one.
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
