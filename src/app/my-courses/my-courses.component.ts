import { Component } from '@angular/core';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
  constructor(public courseService: CourseService){}
}
