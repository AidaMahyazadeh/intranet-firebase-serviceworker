import { Component,  ElementRef,  OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import ICourse from 'src/app/core/models/course.model';
import { AdminAuthStorageService } from 'src/app/core/services/admin/admin-auth-storage.service';
import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';
import { ConfirmEnrollmentDialogComponent } from '../confirm-enrollment-dialog/confirm-enrollment-dialog.component';



@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  selectedCourse !:ICourse;
  id !:number;
  enrolledIn = false;
  panelOpenState =false;
  isShownContent =false;
  isShownVideo = false;
  isShownPdf =false;
  pageVariable=0;
  // pdfSrc='../../../../assets/pdf.pdf'
  @ViewChild('sourcePdf') source !:ElementRef;
  @ViewChild('youtubePlayer') video!:ElementRef;
  
  
  constructor(
    private activatedRoute :ActivatedRoute,
    private router :Router,
    private authStorageService:AuthStorageService,
    private adminAuthStoragrService :AdminAuthStorageService,
    private dialog :MatDialog
    ){}


    ngOnInit(): void {
      // this.activatedRoute.params.subscribe((params :Params)=>{
      //   this.id = params['id']
      // })

      // this.subscription= this.courseService.getCourseById(this.id).subscribe(
      //   res =>{
      //     this.selectedCourse= res
      //   }
      // )
      this.selectedCourse=this.activatedRoute.snapshot.data['courseDetails']
      this.existedEnrolledCourse(this.selectedCourse.id)
    }
    
   existedEnrolledCourse(courseId:number){
    let userDetail = this.authStorageService.getAllUserDetail()
   this.enrolledIn= this.adminAuthStoragrService.existedCourse(userDetail.username,courseId)?true:false
   } 

    enrollInTheCourse(course:ICourse){
      this.authStorageService.storeEnrolledCourse(course)
      let userDetail = this.authStorageService.getAllUserDetail()
      this.adminAuthStoragrService.updateExistedUsers(userDetail.username,[course])
      this.enrolledIn=true
    }

    openDialog(course :ICourse){
      return this.dialog.open(ConfirmEnrollmentDialogComponent,{disableClose :true}).afterClosed().subscribe(res=>{
        //  console.log(res)
        if (res){
          this.enrollInTheCourse(course)
        }
      })
    }

   showContent(){
    return this.isShownContent=!this.isShownContent
   }

    backToAllCourses(){
      this.router.navigate(['courses'])
     }

    playVideo(id:number){
      // console.log(id,this.video.nativeElement.id)
      if(!!this.video&&this.video.nativeElement.id==id){
      this.isShownVideo=!this.isShownVideo
      }
      
    }

    showPdf(){
      this.isShownPdf=!this.isShownPdf
    }

    downloadPdf(){
      const link = document.createElement('a')
      link.setAttribute('target', '_blank')
      link.setAttribute('href', this.source.nativeElement.getAttribute('src'))
      link.setAttribute('download', 'text.pdf')
      document.body.appendChild(link)
      link.click()
      link.remove()
    }

}
