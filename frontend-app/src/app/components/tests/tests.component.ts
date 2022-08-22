import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {TestsService} from "../../services/tests.service";
import {ITest} from "../../models/test.model";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  tests: ITest[] = [];

  constructor(private loginService: LoginService, private testsService: TestsService) { }

  ngOnInit(): void {
    this.tests = this.testsService.getTests(this.loginService.passcode);
  }

  getUserName() {
    return this.loginService.user;
  }

  isPaused(test: ITest) {
    return this.testsService.isPaused(test);
  }

  pauseTest(test: ITest) {
     this.testsService.pauseTest(test);
  }

  unpauseTest(test: ITest) {
    this.testsService.unpauseTest(test);
  }

  startTest(test: ITest) {
    let date = new Date();
    this.testsService.setStartTime(test, date.toString());
  }

  startTime(test: ITest) {
    return this.testsService.getStartTime(test);
  }
}
