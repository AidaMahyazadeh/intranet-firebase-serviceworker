import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ICourse from 'src/app/core/models/course.model';
import { CoursesListService } from 'src/app/core/services/admin/courses-list.service';
import { ModifyCoursesComponent } from './modify-courses/modify-courses.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { AdminAuthStorageService } from 'src/app/core/services/admin/admin-auth-storage.service';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit{
  // displayedColumns=['id','name', 'author','image','description','duration','delete']
  courses !:ICourse[];
  selectedCourse !:ICourse;
  newAddedCourse !:ICourse;

  constructor(
    private coursesListService:CoursesListService,
    private adminAuthStorage :AdminAuthStorageService,
    private dialog :MatDialog
    ){}
  
  ngOnInit() {
    this.coursesListService.getAllCourses().subscribe(
      res=> this.courses=res
    )
  }

  getNumberOfStudents(courseId:number){
     return this.adminAuthStorage.getTotalStudents(courseId)
    }

  getCourseById(courseId:number){
   return this.selectedCourse=this.courses.find(course=>course.id==courseId)!
  }
  
  onDelete(id:number){
    this.courses= this.courses.filter(course=>course.id!=id)
  }

  openDialog(){
   const dialogRef= this.dialog.open(NewCourseComponent)
   dialogRef.componentInstance.newCourse=this.newAddedCourse;
   dialogRef.componentInstance.newAddedCourse.subscribe(
    (res:ICourse)=>{
      this.courses.push(res)
    }
   )
  }

  openModify(id:number){
    this.getCourseById(id)
    const dialogRef= this.dialog.open(ModifyCoursesComponent,{
      height:'75%'
    })
    dialogRef.componentInstance.selectedCourse=this.selectedCourse
  }
}
