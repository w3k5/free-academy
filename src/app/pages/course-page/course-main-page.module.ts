import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ComponentsModule } from '@components/components.module';
import { VarDirective, HighlightDirective } from '@directives';
import { UiKitModule } from '@ui-kit/ui-kit.module';

import { CourseMainPageComponent } from './course-main-page/course-main-page.component';
import { ExercisePageComponent } from './exercise-page/exercise-page.component';

const routes: Route[] = [
  {
    path: '',
    component: CourseMainPageComponent,
    pathMatch: 'full',
  },
  {
    path: ':courseId',
    component: ExercisePageComponent,
  },
];

@NgModule({
  declarations: [CourseMainPageComponent, ExercisePageComponent, VarDirective, HighlightDirective],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule, MarkdownModule.forRoot(), UiKitModule],
})
export class CourseMainPageModule {}
