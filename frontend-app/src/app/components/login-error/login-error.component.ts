import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})
export class LoginErrorComponent {

  constructor(public dialogRef: MatDialogRef<LoginErrorComponent>) { }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }
}
