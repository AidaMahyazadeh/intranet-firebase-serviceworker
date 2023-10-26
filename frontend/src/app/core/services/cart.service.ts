import { Injectable } from '@angular/core';
import { AuthStorageService } from './auth/auth-storage.service';
import ICourse from '../models/course.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 addedCourses :ICourse[] =[];
 coursesList$ = new BehaviorSubject<ICourse[]>([]);
 
  constructor(private authStorageService :AuthStorageService) { }

  addToCart(course :ICourse){
    if(!this.authStorageService.existedCourse(course)){
      this.addedCourses.push(course)
      this.authStorageService.storeCartItem(this.addedCourses)
      this.coursesList$.next(this.addedCourses)
    }
    this.authStorageService.getCartItem()
  }

  removeCourseFromCard(id:number){
    const index =this.addedCourses.findIndex(course=>course.id==id)
    this.addedCourses.splice(index,1)
    this.coursesList$.next(this.addedCourses)
    this.authStorageService.removeCourseFromCartItem(id)
  }

  removeAllCartCourses(){
    this.addedCourses=[]
    this.coursesList$.next(this.addedCourses)
    this.authStorageService.removeCartItem()
  }
}
