import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CoursesService } from '../core/services/courses.service';
import ICourse from '../core/models/course.model';
import { Router } from '@angular/router';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent
} from '@angular/material/paginator';
import { PaginatorService } from '../core/services/paginator.service';

import { CardListComponent } from '../shared/components/card-list/card-list.component';
import { Subscription} from 'rxjs';
import { CardListDataSource } from '../shared/components/card-list/models/card-list.datasource';
import { CardItem } from '../shared/components/card-list/models/card-item.model';
import { Pagination } from '../shared/components/card-list/models/pagination.model';
import { CourseDatasource } from './models/course.datasource';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  //  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorService }],
})
export class CoursesComponent implements OnInit   {
   courses!: ICourse[];
  searchedCourse!: string;
  length!: number;
  pageSize = 4;
  currentPage : number= 1;
  pageSizeOptions = [4, 8, 12];
  @ViewChild('paginator',{static :true}) paginator!: MatPaginator;
  subscription !:Subscription;
  datasource!: CourseDatasource;
  
 
  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {
   
  }

  ngOnInit(){
    this.datasource = new CourseDatasource(this.coursesService)
    this.datasource.pagination=this.paginator;
    // this.coursesService.getAllCourses().subscribe(
    //   res => this.courses=res
    // )
    
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

  handlePageEvent(event:PageEvent){
    this.currentPage=event.pageIndex;
    this.pageSize= event.pageSize
  }
}




// ngOnInit() {
//    this.dataSource = new CardListComponent(this.coursesService); 
//    this.dataSource.pagination = this.paginator; 
//   this.getCourses(this.currentPage,this.pageSize); 
// }

// ngAfterVieInit(){
//   this.dataSource.pagination = this.paginator;
//   this.getCourses(this.dataSource.pagination.pageIndex,this.dataSource.pagination.pageSize);
//   }


// getCourses(pageIndex:number,pageSize:number){
//  this.subscription = this.coursesService.getAllCourses(pageIndex,pageSize).subscribe(res =>{
//     this.courses =res
//     this.length=this.courses.length
//   })
// }

// handlePageEvent(event: PageEvent) {
//   this.currentPage = event.pageIndex+1;
//   this.pageSize = event.pageSize;
//   console.log(event,this.currentPage)
//   this.getCourses(this.currentPage,this.pageSize)
// }



// onSearchedCourse(searchText: string) {
//   this.searchedCourse = searchText;
// }

// ngOnDestroy(){
//   this.subscription.unsubscribe()
// }




    //      this.dataSource = new CardListComponent(this.coursesService)
    //       this.dataSource.paginator = this.paginator

    //     this.paginator.page.subscribe(page =>{
    //       this.handlePageEvent(page)
    //     })
    //   }
    // )


    // getRoute() {
  //   let showAllCourses = true;
  //   if (this.router.url.endsWith('courses')) {
  //     return (showAllCourses = true);
  //   }
  //   return (showAllCourses = false);
  // }



  //   const startIndex=this.currentPage*this.pageSize;
  //   let endIndex= startIndex+this.pageSize;
  //   if(endIndex >this.courses.length){
  //     endIndex = this.courses.length
  //   }  
  //  this.courses= this.courses.slice(startIndex,endIndex) 