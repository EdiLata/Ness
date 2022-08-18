import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {LoginErrorComponent} from "../login-error/login-error.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  shortPassCode = 0;
  wrongPassCode = 0;

  constructor(private loginService: LoginService, private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
    this.loginForm = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      input3: ['', Validators.required],
      input4: ['', Validators.required],
      input5: ['', Validators.required],
      input6: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onDigitInput(event: any): void {
    let element;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null)
      return;
    else
      element.focus();
  }

  submit(): void {
    if (this.loginForm.valid) {
      this.shortPassCode = 0;
      if (this.loginService.checkPassCode(this.loginForm.get('input1')?.value + this.loginForm.get('input2')?.value + this.loginForm.get('input3')?.value +
        this.loginForm.get('input4')?.value + this.loginForm.get('input5')?.value + this.loginForm.get('input6')?.value)) {
        this.loginService.setCurrentUser(this.loginForm.get('input1')?.value + this.loginForm.get('input2')?.value + this.loginForm.get('input3')?.value +
          this.loginForm.get('input4')?.value + this.loginForm.get('input5')?.value + this.loginForm.get('input6')?.value);
        this.wrongPassCode = 0;
        this.router.navigate(['home']);
      }
      this.wrongPassCode++;
    }
    if (this.wrongPassCode > 2) {
      this.wrongPassCode = 0;
      this.shortPassCode = 0;
      this.openErrorDialog();
    } else if (!this.loginForm.valid) {
      this.wrongPassCode = 0;
      this.tooShortPassCode();
    }
    this.resetForm();
  }

  openErrorDialog(): void {
    this.dialog.open(LoginErrorComponent);
  }

  tooShortPassCode(): void {
    if (this.loginForm.get('input1')?.value === '' || this.loginForm.get('input2')?.value === '' || this.loginForm.get('input3')?.value === '' ||
      this.loginForm.get('input4')?.value === '' || this.loginForm.get('input5')?.value === '' || this.loginForm.get('input6')?.value === '') {
      this.shortPassCode++;
    }
  }

  resetForm(): void {
    this.loginForm.setValue({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: ''
    });
  }
}
