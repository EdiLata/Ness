import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() userName: string = '';
  clicked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showLogout() {
    this.clicked = !this.clicked;
    console.log(this.clicked)
  }

}
