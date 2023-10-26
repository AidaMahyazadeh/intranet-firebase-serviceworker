import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  adminName:string ='';
  constructor(
    private authStorageService : AuthStorageService,
    private router :Router,
    private activatedRoute :ActivatedRoute
    ){}

  ngOnInit(): void {
    this.adminName= this.authStorageService.getUserName()
  }
  
  goToUserList(){
     this.router.navigate(['users-list'],{relativeTo :this.activatedRoute})
  }

  goToCourseList(){
     this.router.navigate(['courses-list'],{relativeTo :this.activatedRoute})
  }

  goToProfessorList(){
     this.router.navigate(['professors-list'],{relativeTo :this.activatedRoute})
  }

}
