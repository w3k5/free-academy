import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfilePageComponent,
  },
];

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProfilePageModule {}
