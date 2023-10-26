import { Injectable } from '@angular/core';
import ICourse from '../../models/course.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {
 courses :ICourse[]=[];
 enrolledCourses :ICourse[]=[];
 enrolledCourseSubject$ = new BehaviorSubject<ICourse[]>([]);

  constructor() { }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  storeRole(role:string){
    localStorage.setItem('role',role)
  } 

  getRole(){
   return (localStorage.getItem('role')!)
  }

  removeUnneccessaryStorage(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    localStorage.removeItem('enrolledCourse')
    localStorage.removeItem('__paypal_storage__')
  }

  storeUserName(username :string){
    localStorage.setItem('username',username)
  }

  getUserName():string{
    return (localStorage.getItem('username')!)
  }

  storeCartItem(course :ICourse[]){
    localStorage.setItem('cartItem',JSON.stringify(course))
  }

  getCartItem():ICourse[]{
    return this.courses = JSON.parse(localStorage.getItem('cartItem')!);
  }

  existedCourse(course:ICourse):boolean{
    return( this.courses.findIndex(item=>item.id==course.id)>-1)
  }

  removeCourseFromCartItem(courseId:number){
   this.courses = this.courses.filter(course=>course.id===courseId)
    this.storeCartItem(this.courses)
  }


  storeEnrolled(){
    localStorage.setItem('enrolledCourse',JSON.stringify(this.enrolledCourses))
  }

  storeEnrolledCourse(course:ICourse){
    // this.enrolledCourses = this.getEnrolledCourse();
    this.enrolledCourses.push(course)
    this.storeEnrolled()
  }

  getEnrolledCourse():ICourse[]{
   return JSON.parse(localStorage.getItem('enrolledCourse')!)
  }

  existedEnrolledCourse(courseId:number):boolean{
    return this.enrolledCourses.findIndex(item=>item.id==courseId)>-1
  }

 

  removeEnrolledCourse(){
    localStorage.removeItem('enrolledCourse')
  }

  clearPayPalStorage(){
    localStorage.removeItem('__paypal_storage__')
  }

  getAllUserDetail(){
   const user ={
      username :this.getUserName(),
      role :this.getRole(),
      enrolledCourse:this.getEnrolledCourse()
     }
     return user
  }

   removeCartItem(){
    localStorage.removeItem('cartItem')
  }

  storeCartTotal(total :number){
    localStorage.setItem('cartTotal',JSON.stringify(total.toFixed(2)))
  }

  getCartTotal(){
    return JSON.parse(localStorage.getItem('cartTotal')!)
  }

  removeCartTotal(){
    localStorage.removeItem('cartTotal')
  }

}
