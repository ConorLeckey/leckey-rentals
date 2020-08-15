import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshDetailsService {
  invokeRefresh: Subject<any> = new Subject();

  refresh(id){
    this.invokeRefresh.next(id);
  }
}
