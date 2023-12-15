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
    MovableDirective
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
    MatPaginatorModule
  ]
})
export class AdminModule { }
