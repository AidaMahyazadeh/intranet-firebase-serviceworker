import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName !:string;
  screenImage ='../../../assets/screenImage/shutterstock_1612044622.jpg'
 
  
  constructor(
    private authStorageService :AuthStorageService,
    private router :Router
    ){}
  
  ngOnInit(){
   return this.userName = this.authStorageService.getUserName()!
  }

  onCourses(){
    this.router.navigate(['courses'])
  }
}
