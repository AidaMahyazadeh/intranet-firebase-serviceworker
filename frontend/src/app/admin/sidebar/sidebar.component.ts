import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';

const animatedSidebar= trigger('animatedSidebar',[
  state('collapsed',style({
    width :'50px'
  })),
  state('expanded',style({
    width: '150px'
  })),
  transition('collapsed<=>expanded',animate('500ms ease-in-out'))
]
)

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations:[animatedSidebar]
 
})
export class SidebarComponent implements OnInit {
  sidebarState = 'collapsed';
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
  goToProfessorPagination(){
    this.router.navigate(['professors-pagination'],{relativeTo :this.activatedRoute})
 }

  expandSidebar(){
    this.sidebarState ='expanded'
  }

  collapseSidebar(){
    this.sidebarState ='collapsed'
  }

}
