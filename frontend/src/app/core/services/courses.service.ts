import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, find, map } from 'rxjs';
import ICourse from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
 coursesUrl = '../assets/data/courses.data.json';
 courses !:ICourse[];
 courseSubject$ = new BehaviorSubject<ICourse[]>([]);

  constructor(private http :HttpClient) { }

  getAllCourses():Observable<ICourse[]>{
   return this.http.get<
   ICourse[]>(this.coursesUrl)
  }

  addCourse(course :ICourse){
   this.courses.push(course)
   this.courseSubject$.next(this.courses)
  }

  getCourseById(id:number):Observable<ICourse>{
  return this.getAllCourses().pipe(
     map(courses =>courses.find(course=>course.id==id)!)
  )
 }
}
