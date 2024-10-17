import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { GoalsComponent } from './goals/goals.component';
import { DyelbotComponent } from './dyelbot/dyelbot.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '/', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent},
  { path: 'goals', component: GoalsComponent },
  { path: 'dyelbot', component: DyelbotComponent },
  { path: 'login', component: LoginComponent },
];

 