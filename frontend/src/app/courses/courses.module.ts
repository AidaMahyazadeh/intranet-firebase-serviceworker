import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { FormsModule } from '@angular/forms';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';

import { CoursesComponent } from './courses.component';
import { SearchComponent } from './search/search.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ConfirmEnrollmentDialogComponent } from './confirm-enrollment-dialog/confirm-enrollment-dialog.component';
import { SafePipe } from './safe.pipe';
<<<<<<< HEAD
import {MatButtonToggleModule} from '@angular/material/button-toggle';
=======
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46




@NgModule({
  declarations: [
    CoursesComponent,
    SearchComponent,
    CourseDetailsComponent,
    ConfirmEnrollmentDialogComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
<<<<<<< HEAD
    MatButtonToggleModule
=======
    MatPaginatorModule,
    MatInputModule
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46
  ]
})
export class CoursesModule { }
