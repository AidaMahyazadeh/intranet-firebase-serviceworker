import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IProfessor } from 'src/app/core/models/professor.model';
import { ProfessorService } from 'src/app/core/services/admin/professor.service';

@Component({
  selector: 'app-new-professor',
  templateUrl: './new-professor.component.html',
  styleUrls: ['./new-professor.component.css']
})
export class NewProfessorComponent implements OnInit {
  professorForm !:FormGroup;
  newProfessor !:IProfessor;
  lengthProfessorsList !:number;
  @Output() newAddedProfessor = new EventEmitter <IProfessor>()
  emailPattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
 
  constructor(
   private professorService :ProfessorService,
   private dialog : MatDialog
   ){}
 
  ngOnInit(){
 
    this.professorForm = new FormGroup({
     name: new FormControl('',Validators.required),
     email : new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
     courses: new FormControl('',Validators.required),
     gender: new FormControl('',Validators.required)
    })
  }
  
 
  close(){
  this.dialog.closeAll()
  }
 
 addProfessor(){
   if(this.professorForm.valid){
     this.newProfessor = this.professorForm.value
     this.newAddedProfessor.emit(this.newProfessor)
     this.professorForm.reset()
     this.close()
   }
  
 }
}
