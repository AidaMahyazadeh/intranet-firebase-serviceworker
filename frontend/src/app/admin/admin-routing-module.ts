import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { ProfessorsComponent } from './professors/professors.component';
import { CourselistComponent } from './courselist/courselist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfessorListComponent } from './professors/professor-list/professor-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'users-list', component: UserlistComponent },
      { path: 'courses-list', component: CourselistComponent },
      { path: 'professors-list', component: ProfessorsComponent },
      { path: 'professors-pagination', component: ProfessorListComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
