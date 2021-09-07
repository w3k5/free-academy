import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page.component';

const routes: Route[] = [
  {
    path: '',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NotFoundPageModule {}
