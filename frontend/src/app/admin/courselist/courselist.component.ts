import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ICourse from 'src/app/core/models/course.model';
import { ModifyCoursesComponent } from './modify-courses/modify-courses.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { AdminAuthStorageService } from 'src/app/core/services/admin/admin-auth-storage.service';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import { Pagination } from 'src/app/shared/components/card-list/models/pagination.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CourseDatasource } from 'src/app/courses/models/course.datasource';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';



@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
})
export class CourselistComponent implements OnInit,AfterViewInit,OnDestroy {
   courses !:ICourse[];
  selectedCourse !:ICourse;
  newAddedCourse !:ICourse;
  length :number=0;
  pageSize :number=4;
  currentPage:number=0;
  subscription !:Subscription;
  @ViewChild(PaginationComponent,{static:true}) paginator !:Pagination;
  datasource!: CourseDatasource;

  
  constructor(
    private courseService:CoursesService,
    private adminAuthStorage :AdminAuthStorageService,
    private dialog :MatDialog,
    ){}
  
   ngOnInit() {
    this.datasource = new CourseDatasource(this.courseService)
    this.datasource.pagination=this.paginator
    this.getCourses({pageIndex:this.currentPage,pageSize:this.pageSize})
  }

  ngAfterViewInit(): void {
    this.datasource.pagination=this.paginator
  }
 
  getCourses(pageFilter:Pagination){
    this.datasource.loadData$(pageFilter).subscribe(
      res=>{
      this.courses= res
     return this.courses= this.courseService.paginate(pageFilter,this.courses)
    }
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  handlePageEvent(event:PageEvent){
    console.log(event)
   this.pageSize=event.pageSize;
   this.currentPage=event.pageIndex;
   this.length=event.length
   this.getCourses({pageIndex:this.currentPage,pageSize:this.pageSize})
   
    }
  }

