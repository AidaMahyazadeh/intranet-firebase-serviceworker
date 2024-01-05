import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from './core/services/guards/admin-auth.guard';


const routes: Routes = [
  {path : '', redirectTo :'login',pathMatch:'full'}, 
  {path :'admin'
  // ,canActivate :[adminAuthGuard]
   ,loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule)},
  {
    path :'courses',loadChildren :()=>import('./courses/courses.module').then(module=>module.CoursesModule)
  },
  { path : 'professor',loadChildren :()=>import('./professor/professor.module').then(module=>module.ProfessorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
