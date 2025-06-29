import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './features/auth/pages/login-page/login-page.component';
import {EmployeeIdPageComponent} from './features/employee/pages/employee-id-page/employee-id-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'id',
    component: EmployeeIdPageComponent,
  }





];
