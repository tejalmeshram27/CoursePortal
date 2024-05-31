import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course/course.service';
import { Course } from '../interface/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  constructor(private router : ActivatedRoute, private courseService: CourseService){}
  courseId? : number;
  course?: Course
  ngOnInit(): void {
    this.courseId = this.router.snapshot.params["id"]
    if(this.courseId)
    this.courseService.getCourseById(this.courseId).subscribe({
      next: response => this.course = response
    })
  }

  onEnrolled(){
    if(this.course)
    this.courseService.myCourses.push(this.course)
  }


    
  




}
