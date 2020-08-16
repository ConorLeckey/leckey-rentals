import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ScrollService} from '../services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public height; // This height is used by the navbar to determine its height in pixels
  private bannerVH = 0.65; // This value is the proportion of the screen at which the bottom of the banner is (65%) down the screen

  @ViewChild('navbar') navbar: HTMLElement;

  optionArray = [ // This array contains all the navbar tabs and their links. and ngFor will create an element for each in the template
    {
      text: 'Home',
      color: 'W',
      href: 'home'
    },
    {
      text: 'Our Cars',
      color: 'G',
      href: 'home#cars'
    },
    {
      text: 'The Team',
      color: 'W',
      href: 'the-team'
    },
    {
      text: 'Contact Us',
      color: 'W',
      href: 'contact-us'
    }
  ];

  constructor(private scroll: ScrollService) {
  }

  @HostListener('window:scroll', [])
  onScroll(): void { // This fn is called when the user scrolls. If the user scrolls below the banner, it shrinks the navbar
    if (this.navbar) {
      if (window.scrollY >= window.innerHeight * this.bannerVH) { // If the user has scrolled past the banner
        const scrollPast = window.scrollY - window.innerHeight * this.bannerVH; // This variable stores how far they have scrolled past
        const barMax = window.innerHeight * 0.15; // 0.15 here is the maximum the bar can grow to, as a proportion of the screen (15%)

        const growHeight = barMax - scrollPast; // This is how large the navbar should be, the more you scroll, the smaller it gets
        console.log(growHeight);

        if (growHeight > 70) { // 70 (+ 1) here is the minimum the screen can be. If growHeight is less than 70, it no longer shrinks
          this.height = growHeight + 1; // Set the navbar scroll height + 1 to ensure the navbar is flush over the image.
        } else {
          this.height = 71; // If it scrolls to far, just set the navbar height to 70.
        }
      } else {
        this.height = null;
        // If the user has not scrolled past the banner,
        // it's height is set to null (this sets its height to the default set in the scss file (15vh)
      }
    }
  }

  scrollTo(value) {
    // Calls the scroll service when a scroll button (home/ourcars) is clicked. Passes the message to home screen via service
    this.scroll.triggerScroll(value);
  }

}
