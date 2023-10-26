import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUser from '../../models/user.model';
import { Observable } from 'rxjs';
import ICourse from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  usersUrl='../../assets/data/users.data.json';
  users !:IUser[];
  

  constructor(private http :HttpClient) { }

  getAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.usersUrl)
   }


   getUsers(){
    this.getAllUsers().subscribe(
      res=>this.users=res
    )
   }
   
   updateCurrentUser(course:ICourse[]){
    let currentUser= localStorage.getItem('username')!
    let user= this.users.find(user=>user.username==currentUser)!
    user.enrolledCourse?.push(...course)
   return this.http.patch<IUser>(this.usersUrl,user.enrolledCourse)
   }

  //  storeEnrolledCourse(course:ICourse[]){
  //   // this.enrolledCourses = this.getEnrolledCourse();
  //   this.enrolledCourses.push(...course)
  //   this.storeEnrolled()
  // }


  

  

  addUser(user:IUser){
    this.http.post(this.usersUrl,user)
  }
  
  // getUserBayUserName(username :string){
  //   this.getAllUsers().pipe(
  //     map(users => users.find(user=>user.username==username)) 
  //   )
  // }
  
  // updateUser(username :string, enrolledCourse:ICourse[]){
  //   this.http.patch(this.usersUrl,{
  
  //   })
  // }
}
