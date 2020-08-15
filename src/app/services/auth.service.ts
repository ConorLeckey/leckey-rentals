import {Injectable} from '@angular/core';
import {IUser} from '../user/user.model';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currenUser: IUser;

  loginUser(userName: string, password: string) {
    this.currenUser = {
      id: 1,
      userName,
      firstName: 'Conor',
      lastName: 'Yekel'
    };
  }

  isAuthenticated() {
    return !!this.currenUser;
  }

  getName() {
    return this.currenUser.firstName;
  }

  getSurname() {
    return this.currenUser.lastName;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currenUser.firstName = firstName;
    this.currenUser.lastName = lastName;
  }

  logOut() {
    this.currenUser = null;
  }

}
