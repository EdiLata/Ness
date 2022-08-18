import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginService} from "./services/login.service";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginErrorComponent } from './components/login-error/login-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestsComponent } from './components/tests/tests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginErrorComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
