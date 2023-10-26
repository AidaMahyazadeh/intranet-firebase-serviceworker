import { Component, OnInit } from '@angular/core';
import { IProfessor } from '../core/models/professor.model';
import { ProfessorService } from '../core/services/admin/professor.service';
import { AuthStorageService } from '../core/services/auth/auth-storage.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit{
 professor !:IProfessor;
 userName !:string;

 constructor(
  private professorService :ProfessorService,
  private authStorageService :AuthStorageService
  ){}

 ngOnInit() {
    this.userName = this.authStorageService.getUserName()
    // this.professor=this.professorService.getProfessorByUsername(this.userName)

 }

 

}
