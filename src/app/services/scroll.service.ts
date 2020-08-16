import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollSubject = new BehaviorSubject(''); // Triggers any subscriptions when .next is called

  triggerScroll(value) {
    this.scrollSubject.next(value); // calls .next on scroll behaviour subject, so home component knows where/when to scroll
  }
}
