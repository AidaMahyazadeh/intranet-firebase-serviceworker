import { Component, OnInit } from '@angular/core';
import { AuthStorageService } from '../core/services/auth/auth-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminName !:string;
  showContent =false;
  
  constructor(
    private authStorageService :AuthStorageService,
    private router :Router,
    private activatedRout :ActivatedRoute
    ){}
  
     ngOnInit(){
      this.adminName = (this.authStorageService.getUserName()!)
     }
  
     getRoute(){
      if (this.router.url.endsWith('/admin')) {
        return this.showContent = false
      }
        return this.showContent = true
     }
}
