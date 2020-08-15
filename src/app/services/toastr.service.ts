import { Injectable } from '@angular/core';

declare let toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  success(message: String, title?: String) {
    toastr.success(message, title);
  }
  warn(message: String, title?: String) {
    toastr.warn(message, title);
  }
  info(message: String, title?: String) {
    toastr.info(message, title);
  }
  error(message: String, title?: String) {
    toastr.error(message, title);
  }
}
