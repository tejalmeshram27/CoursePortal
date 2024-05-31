import { Component, OnInit } from '@angular/core';
import { Course } from '../interface/course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  courses : Course[] = []
  searchCourses : Course[] = [];

  constructor(private courseService : CourseService){}

  ngOnInit(): void {
    this._searchText = ''
    this.getCourses()
    this.courseService.getCourses().subscribe({
      next: response => this.searchCourses = response
    })
  }

  getCourses(){
    return this.courseService.getCourses().subscribe({
      next: response => this.courses = response
    })
  }

  private _searchText = '';

  get searchText(){

    return this._searchText

  }

  searching(value:string){

    value = value.toLocaleLowerCase()

    return this.courses.filter((course:Course) =>

    course.courseName.toLocaleLowerCase().includes(value))

  }


  set searchText(value: string){
    this._searchText = value
    this.searchCourses = this.searching(value)
  }


  }
//   courses = [
//     {
//       id:1,
//       name:"Tejal",
//       desp:"I am good",
//       instructorName: "Stephen Hawking",
//       enrolled: 500,

//     },
//     {
//       id:2,
//       name:"Meshram",
//       desp:"I am bad",
//       instructorName: "Stephen Hawking",
//       enrolled: 500
//     },
//     {
//       id:3,
//       name:"C++",
//       desp:"C++ god",
//       instructorName: "Stephen Hawking",
//       enrolled: 500

//     },
//     {
//       id:4,
//       name:"C++",
//       desp:"C++ god",
//       instructorName: "Stephen Hawking",
//       enrolled: 500

//     },
//     {
//       id:5,
//       name:"C++",
//       desp:"C++ god",
//       instructorName: "Stephen Hawking",
//       enrolled: 500

//     },
//     {
//       id:6,
//       name:"C++",
//       desp:"C++ god",
//       instructorName: "Stephen Hawking",
//       enrolled: 500

//     },
//   ]
// }
