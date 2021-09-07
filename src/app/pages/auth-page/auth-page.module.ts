import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthPageComponent } from './auth-page.component';

const routes: Route[] = [
  {
    path: '',
    component: AuthPageComponent,
  },
];

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthPageModule {}
