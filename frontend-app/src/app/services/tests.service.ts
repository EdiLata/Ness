import {Injectable} from "@angular/core";
import {mockTests} from "../mock-data/mock-tests";
import {ITest} from "../models/test.model";

@Injectable()
export class TestsService {
  getTests(passCode: string) {
    let currentTest: any[] = [];
    this.setTestsStatus();
    mockTests.forEach(test => {
      if (test.passcode === passCode) {
        currentTest.push(test)
      }
    });
    return currentTest;
  }

  isPaused(testToCheck: ITest) {
    let testIsPaused;
    mockTests.forEach(test => {
      if (test === testToCheck) {
        testIsPaused = test.paused;
      }
    });
    return testIsPaused;
  }

  pauseTest(testToPause: ITest) {
    mockTests.forEach(test => {
      if (test === testToPause) {
        test.paused = true;
      }
    });
  }

  unpauseTest(testToUnpause: ITest) {
    mockTests.forEach(test => {
      if (test === testToUnpause) {
        test.paused = false;
      }
    });
  }

  setStartTime(testToStart: ITest, date: any) {
    mockTests.forEach(test => {
      if (test === testToStart) {
        test.started = true;
        test.startTime = date;
      }
    });
  }

  getStartTime(testStarted: ITest) {
    let startTime;
    mockTests.forEach(test => {
      if (test === testStarted) {
        startTime = test.startTime;
      }
    });
    return startTime
  }

  setTestsStatus() {
    let date = new Date();
    mockTests.forEach(test => {
      if (test.endTime >= date.toString() && test.startTime <= date.toString()) {
        test.status = 'Available';
      } else {
        test.status = 'Unavailable';
      }
    });
  }
}
