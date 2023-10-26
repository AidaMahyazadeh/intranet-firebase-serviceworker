import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
import { ProfessorRoutingModule } from './professor.routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ProfessorComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    MatCardModule
  ]
})
export class ProfessorModule { }
