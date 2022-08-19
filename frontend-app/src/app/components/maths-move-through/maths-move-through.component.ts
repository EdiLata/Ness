import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-maths-move-through',
  templateUrl: './maths-move-through.component.html',
  styleUrls: ['./maths-move-through.component.css']
})
export class MathsMoveThroughComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  getUserName() {
    return this.loginService.user;
  }

}
