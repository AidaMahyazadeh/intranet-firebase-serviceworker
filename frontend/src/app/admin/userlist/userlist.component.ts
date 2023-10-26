import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import IUser from 'src/app/core/models/user.model';
import { AdminAuthStorageService } from 'src/app/core/services/admin/admin-auth-storage.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users !:IUser[];
  subscription !:Subscription;
  displayedColumns =['fullname','username','email','enrolledCourse'];
  innerDisplayColumns =['name','author'];
  expandedElement !:IUser; 
  constructor(private adminAuthStorageService :AdminAuthStorageService){}

  ngOnInit(){
  this.users=this.adminAuthStorageService.getAllUsers();
}


onDelete(username:string){
  this.users = this.users.filter(user=>user.username!=username)
}
}
