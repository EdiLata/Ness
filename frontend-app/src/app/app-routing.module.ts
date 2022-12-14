import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {TestsComponent} from "./components/tests/tests.component";
import {LoginGuard} from "./guards/login.guard";
import {MathsMoveThroughComponent} from "./components/maths-move-through/maths-move-through.component";

const routes: Routes = [
  {path: 'mathsMoveThrough', component: MathsMoveThroughComponent, canActivate: [LoginGuard]},
  {path: 'tests', component: TestsComponent, canActivate: [LoginGuard]},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
