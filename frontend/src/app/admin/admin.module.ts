import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AdminComponent } from './admin.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CourselistComponent } from './courselist/courselist.component';
import { ProfessorsComponent } from './professors/professors.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { NewProfessorComponent } from './professors/new-professor/new-professor.component';
import { ModifyDetailProfessorComponent } from './professors/modify-detail-professor/modify-detail-professor.component';

import { ModifyCoursesComponent } from './courselist/modify-courses/modify-courses.component';
import { NewCourseComponent } from './courselist/new-course/new-course.component';
import { DraggableDirective } from '../shared/directives/draggable.directive';
import { MovableDirective } from '../shared/directives/movable.directive';
<<<<<<< HEAD
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProfessorListComponent } from './professors/professor-list/professor-list.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
=======
import { SharedModule } from '../shared/shared.module';
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46


@NgModule({
  declarations: [
    AdminComponent,
    UserlistComponent,
    CourselistComponent,
    ProfessorsComponent,
    SidebarComponent,
    NewProfessorComponent,
    ModifyDetailProfessorComponent,
    ModifyCoursesComponent,
    NewCourseComponent,
    DraggableDirective,
    MovableDirective,
    ProfessorListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
<<<<<<< HEAD
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
    
=======
    SharedModule 
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46
  ]
})
export class AdminModule { }
