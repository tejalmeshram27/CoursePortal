import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../interface/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses : Course[] = []
  myCourses:Course[] = []
  baseUrl = ".\\assets\\data\\courseData.json"
  constructor(private http: HttpClient) { }

  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl).pipe(
      map((courses) => {
        this.courses = courses;
        return courses})
    )
  }

  getCourseById(id : number): Observable<Course | undefined>{
    return this.getCourses().pipe(
      map((courses) => 
        courses.find((course) => course.courseId == id)
      )
    )
  }

}
