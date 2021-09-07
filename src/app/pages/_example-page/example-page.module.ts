import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ExamplePageComponent } from './example-page.component';

const routes: Route[] = [
  {
    path: '',
    component: ExamplePageComponent,
  },
];

@NgModule({
  declarations: [ExamplePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ExamplePageModule {}
