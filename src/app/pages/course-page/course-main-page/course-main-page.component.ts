import { Component } from '@angular/core';
import { MockCourseResponse } from '@mock/courses.mock';

@Component({
  selector: 'lgsa-course-main-page',
  templateUrl: './course-main-page.component.html',
  styleUrls: ['./course-main-page.component.scss'],
})
export class CourseMainPageComponent {
  courses = MockCourseResponse;
}
