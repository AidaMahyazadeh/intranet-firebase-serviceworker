import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ICourse from '../../models/course.model';
import { Pagination } from 'src/app/shared/components/card-list/models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {
  coursesUrl='../../assets/data/courses.data.json'
 
  constructor(private http :HttpClient){}
    
  getAllCourses$(pageFilter:Pagination):Observable<ICourse[]>{
    return this.http.get<ICourse[]>(this.coursesUrl)
  }

}
