import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import ICourse from 'src/app/core/models/course.model';
import IPart from 'src/app/core/models/part.model';


@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  courseForm !:FormGroup;
  newCourse !:ICourse;
  @Output() newAddedCourse = new EventEmitter<ICourse>();

  constructor(private dialog : MatDialog){}

  ngOnInit() {
    this.courseForm = new FormGroup({
      name: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required),
      duration: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
       lessons : new FormArray([this.lessonForm()])
    })
  }

 get lessons():FormArray{
    return this.courseForm.get('lessons') as FormArray
  }

  lessonForm(){
    return new FormGroup({
    section : new FormControl(''),
    parts: new FormArray([this.partsForm()])
  })
  }

  getParts(index:number){
  return (this.lessons.at(index).get('parts')as FormArray).controls
  }

  partsForm(){
   return  new FormGroup({
    title :new FormControl(''),
    source :new FormControl(''),
    pdf:new FormControl('')
  })
  }

  addLessons(){
     this.lessons.push(this.lessonForm())
  }

  addCourse(){
    if(this.courseForm.valid){
      console.log(this.courseForm)
      this.newCourse=this.courseForm.value
      console.log(this.newCourse)
      this.newAddedCourse.emit(this.newCourse)
      this.courseForm.reset()
      this.close()
    }
  }

  close(){
    this.dialog.closeAll()
  }
}
