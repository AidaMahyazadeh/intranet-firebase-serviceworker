import { Component, Input, OnInit } from '@angular/core';
import {  FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import ICourse from 'src/app/core/models/course.model';
import ILesson from 'src/app/core/models/lesson.model';
import IPart from 'src/app/core/models/part.model';

@Component({
  selector: 'app-modify-courses',
  templateUrl: './modify-courses.component.html',
  styleUrls: ['./modify-courses.component.css']
})
export class ModifyCoursesComponent implements OnInit {
  modificationForm !:FormGroup;
  modifiedCourse !:ICourse;
  @Input()selectedCourse !:ICourse;
  index = 0

  constructor(private dialog:MatDialog){}

  ngOnInit(): void {
    this.modificationForm = new FormGroup({
      id : new FormControl(this.selectedCourse.id,Validators.required),
      name : new FormControl(this.selectedCourse.name,Validators.required),
      author: new FormControl(this.selectedCourse.author,Validators.required),
      duration: new FormControl(this.selectedCourse.duration,Validators.required),
      image: new FormControl(this.selectedCourse.image,Validators.required),
      description: new FormControl(this.selectedCourse.description,Validators.required),
      lessons :new FormArray(this.getLessons(this.selectedCourse.lessons))
    })
  }

  getLessons(lessons :ILesson[]){
    return lessons.map(lesson => new FormGroup({ section :new FormControl(lesson.section),
      parts :new FormArray(this.getParts(lesson.parts))
    }))
  }

  getParts(parts :IPart[]){
    return parts.map(part=> new FormGroup({
      title :new FormControl(part.title),
      source:new FormControl(part.source),
      pdf:new FormControl(part.pdf)
    }))
  }

  saveModifications(){
    if(this.modificationForm.valid){
       this.modifiedCourse=this.modificationForm.value
       this.modificationForm.reset()
       this.close()
    }
  }

  close(){
    const dialogRef = this.dialog.closeAll()
  }
}
