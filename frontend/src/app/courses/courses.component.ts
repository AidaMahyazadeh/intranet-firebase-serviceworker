import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../core/services/courses.service';
import ICourse from '../core/models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  courses !:ICourse[];
  searchedCourse !:string;
  

  constructor(
    private coursesService:CoursesService,
    private router:Router
    ){}

  ngOnInit(){
    this.coursesService.getAllCourses().subscribe(
      res => this.courses=res
    )
    
  }

  onSearchedCourse(searchText :string){
   this.searchedCourse=searchText
  }

  getRoute(){
    let showAllCourses = true;
    if(this.router.url.endsWith('courses')){
      return showAllCourses= true
    }
    return showAllCourses=false
  }
}