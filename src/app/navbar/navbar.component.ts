import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ScrollService} from '../services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public height;
  private dieChipVH = 0.65;

  @ViewChild('navbar') navbar: HTMLElement;

  optionArray = [
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
  onScroll(): void {
    if (this.navbar) {
      if (window.scrollY >= window.innerHeight * this.dieChipVH) {
        const scrollPast = window.scrollY - window.innerHeight * this.dieChipVH;
        const barMax = window.innerHeight * 0.15;

        const growHeight = barMax - scrollPast;

        if (growHeight > 70) {
          this.height = growHeight + 1;
        } else {
          this.height = 70;
        }
      } else {
        this.height = null;
      }
    }
  }


  ngOnInit() {
  }

  scrollTo(value) {
    this.scroll.triggerScroll(value);
  }

}
