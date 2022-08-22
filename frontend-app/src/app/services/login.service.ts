import {Injectable} from "@angular/core";
import {mockUsers} from "../mock-data/mock-users";

@Injectable()
export class LoginService {
  private currentUser = localStorage.getItem('user') || '';
  private currentPassCode = localStorage.getItem('passCode') || '';
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  get user() {
    return localStorage.getItem('user') || this.currentUser.toString();
  }

  get passcode() {
    return localStorage.getItem('passCode') || this.currentPassCode.toString();
  }

  setCurrentUser(passCode: string) {
    mockUsers.forEach(user => {
      if (user.passCode === passCode) {
        this.currentUser = user.userName;
        this.currentPassCode = user.passCode;
        localStorage.setItem('passCode', user.passCode)
        localStorage.setItem('user', user.userName);
      }
    });
  }

  getPassCodes(): string[] {
    return mockUsers.map(data => data.passCode);
  }

  checkPassCode(passCode: string): boolean {
    let ok = 0;
    this.getPassCodes().forEach(code => {
      if (passCode === code) {
        ok = 1;
      }
    });
    return ok !== 0;
  }
}
