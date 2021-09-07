import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const routes: Route[] = [
  {
    path: '',
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainPageModule {}
