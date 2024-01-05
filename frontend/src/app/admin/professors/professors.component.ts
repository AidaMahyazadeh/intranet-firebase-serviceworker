import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProfessor } from 'src/app/core/models/professor.model';
import { ProfessorService } from 'src/app/core/services/admin/professor.service';
import { NewProfessorComponent } from './new-professor/new-professor.component';
import { ModifyDetailProfessorComponent } from './modify-detail-professor/modify-detail-professor.component';


@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit{
  professors !:IProfessor[];
  newaddedprofessor !:IProfessor;
  selectedProfessor !:IProfessor;
  
  
  constructor(
    private professorsService:ProfessorService,
    private dialog :MatDialog
    ){}
  
  ngOnInit() {
    this.professorsService.getAllProfessore().subscribe(
      res=>this.professors=res
      
      )
      
  }
  
  openDialog(){
  const dialogRef=this.dialog.open(NewProfessorComponent)  
  dialogRef.componentInstance.newProfessor=this.newaddedprofessor;
  dialogRef.componentInstance.newAddedProfessor.subscribe(
    (res:IProfessor)=>{
      this.professors.push(res)
    }
  )
  }
  
  getProfessorById(professorId :number):IProfessor{
   return this.selectedProfessor =this.professors.find(professor=>professor.id ==professorId)!
  }
  
  openModify(id:number){
  this.getProfessorById(id)
  const dialogRef= this.dialog.open(ModifyDetailProfessorComponent)
  dialogRef.componentInstance.selectedProfessor=this.selectedProfessor
  }
  
  
  
  onDeleteProfessor(professorName :string){
    this.professors=this.professors.filter(professor=>professor.name!=professorName)
  }
}
