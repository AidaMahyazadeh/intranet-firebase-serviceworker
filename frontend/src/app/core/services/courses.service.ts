import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, find, map } from 'rxjs';
import ICourse from '../models/course.model';
import { Pagination } from 'src/app/shared/components/card-list/models/pagination.model';

@Injectable({
  providedIn: 'root'
})

export class CoursesService  {
 coursesUrl = '../assets/data/courses.data.json';
 courses :ICourse[]=[];
 courseSubject$ = new BehaviorSubject<ICourse[]>([]);

  constructor(private http :HttpClient) {}


addCourse(course :ICourse){
  this.courses.push(course)
  this.courseSubject$.next(this.courses)
 }

 getAllCourses$(pageFilter: Pagination):Observable<ICourse[]>{
  return this.http.get<
  ICourse[]>(this.coursesUrl)
 }

//  getAllCourses$(pageFilter: Pagination){
//   return this.http.get<
//   ICourse[]>(this.coursesUrl).pipe(
//     map(() => {return this.paginate(pageFilter) })
//   )
//  }

 getCourseById(id:number,pageFilter:Pagination):Observable<ICourse>{
  return this.getAllCourses$(pageFilter).pipe(
     map(courses =>courses.find(course=>course.id==id)!)
  )
 }

 paginate(pageFilter:Pagination,courses:ICourse[]):ICourse[]{
  const startIndex = pageFilter.pageIndex*pageFilter.pageSize;
  const endIndex= (pageFilter.pageIndex*pageFilter.pageSize)+pageFilter.pageSize
   this.courses=courses
 return this.courses=courses.slice(startIndex,endIndex)
 }
}


// getAllCourses$(pageFilter: Pagination):Observable<ICourse[]>{
// return this.http.get<
// ICourse[]>(this.coursesUrl).pipe(
//   map(courses=>{
//     const startIndex = pageFilter.pageIndex*pageFilter.pageSize;
//     const endIndex= (pageFilter.pageIndex*pageFilter.pageSize)+pageFilter.pageSize
//    return courses.slice(startIndex,endIndex)
//   })
// )
// }

//  paginate(pageFilter:Pagination,courses:ICourse[]){
//   const startIndex = pageFilter.pageIndex*pageFilter.pageSize;
//   const endIndex= (pageFilter.pageIndex*pageFilter.pageSize)+pageFilter.pageSize
//  return courses?.slice(startIndex,endIndex)
//  }