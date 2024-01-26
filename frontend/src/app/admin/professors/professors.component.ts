import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProfessor } from 'src/app/core/models/professor.model';
import { ProfessorService } from 'src/app/core/services/admin/professor.service';
import { NewProfessorComponent } from './new-professor/new-professor.component';
import { ModifyDetailProfessorComponent } from './modify-detail-professor/modify-detail-professor.component';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from 'src/app/shared/components/card-list/models/pagination.model';
import { ProfessorDatasource } from 'src/app/courses/models/professor.datasource';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';


@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit{
  professors !:IProfessor[];
  newaddedprofessor !:IProfessor;
  selectedProfessor !:IProfessor;
  length :number=0;
  pageSize :number=4;
  currentPage:number=0;
  pageSizeOptions =[4,8,12]
  dataSource !:ProfessorDatasource;
  @ViewChild(PaginationComponent,{static:true}) paginator !:Pagination;
  
  
  constructor(
    private professorsService:ProfessorService,
    private dialog :MatDialog
    ){}
  
  ngOnInit() {
<<<<<<< HEAD
    this.professorsService.getAllProfessore().subscribe(
      res=>this.professors=res
      
      )
      
=======
    this.dataSource= new ProfessorDatasource(this.professorsService)
    this.dataSource.pagination=this.paginator
    this.getProfessors({pageIndex:this.currentPage,pageSize:this.pageSize})
  }

  getProfessors(pageFilter:Pagination){
    this.dataSource.loadData$(pageFilter).subscribe(
      res=>{
        this.professors=res
        return this.professors=this.professorsService.paginate(pageFilter,this.professors)
      }
    )
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46
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

  handlePageEvent(event:PageEvent){
    console.log(event)
    this.pageSize=event.pageSize;
    this.currentPage=event.pageIndex;
    this.length=event.length
    this.getProfessors({pageIndex:this.currentPage,pageSize:this.pageSize})
  }
}
