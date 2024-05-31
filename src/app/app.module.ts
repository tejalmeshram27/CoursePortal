import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
// import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseEnrolledComponent } from './course-enrolled/course-enrolled.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseDetailComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    // LoginComponent,
    CourseEnrolledComponent,
    MyCoursesComponent,
    LoginComponent,
    SignUpComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
