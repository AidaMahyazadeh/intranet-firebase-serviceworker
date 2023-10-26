import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IProfessor } from 'src/app/core/models/professor.model';

@Component({
  selector: 'app-modify-detail-professor',
  templateUrl: './modify-detail-professor.component.html',
  styleUrls: ['./modify-detail-professor.component.css']
})
export class ModifyDetailProfessorComponent implements OnInit {
  modificationForm !:FormGroup;
  emailPattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  modifiedProfessor !:IProfessor;
 @Input() selectedProfessor !:IProfessor;
  @Output() addedModifiedProfessor = new EventEmitter <IProfessor>();
 
 
  constructor(private dialog: MatDialog){}
 
  ngOnInit() {
    this.modificationForm = new FormGroup({
     name: new FormControl(this.selectedProfessor.name,Validators.required),
     email : new FormControl(this.selectedProfessor.email,[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
     courses: new FormControl(this.selectedProfessor.courses,Validators.required),
     gender: new FormControl(this.selectedProfessor.gender,Validators.required)
    })
  }
 
  onClose(){
   this.dialog.closeAll()
  }
 
  saveModifications(){
   if(this.modificationForm.valid){
    this.modifiedProfessor= this.modificationForm.value;
    this.addedModifiedProfessor.emit(this.modifiedProfessor)
    this.modificationForm.reset()
    this.onClose()
   }
  }
}
