import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEnrolledComponent } from './course-enrolled/course-enrolled.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"course",
    component:CourseComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignUpComponent
  },
  {
    path:"course/:id" ,
    component: CourseDetailComponent
  },
  {
    path:"enrolled/:id" ,
    component: CourseEnrolledComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
