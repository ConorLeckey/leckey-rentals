import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollSubject = new BehaviorSubject('');

  triggerScroll(value) {
    this.scrollSubject.next(value);
  }
}
