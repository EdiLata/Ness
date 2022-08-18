import {Injectable} from "@angular/core";
import {mockUsers} from "../mock-data/mock-users";

@Injectable()
export class LoginService {
  currentUser = '';

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

  getCurrentUser(): string {
    return this.currentUser;
  }

  setCurrentUser(passCode: string) {
    mockUsers.forEach(user => {
      if (user.passCode === passCode) {
        this.currentUser = user.userName;
      }
    });
  }
}
