import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './features/login/login.component';
import {LicenseComponent} from './features/license/license.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'license',
    component: LicenseComponent,
  }





];
