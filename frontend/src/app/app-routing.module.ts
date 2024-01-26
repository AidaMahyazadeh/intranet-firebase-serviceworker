import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from './core/services/guards/admin-auth.guard';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path : '', redirectTo :'login',pathMatch:'full'}, 
<<<<<<< HEAD
  {path :'admin'
  // ,canActivate :[adminAuthGuard]
   ,loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule)},
=======
  {path :'home', component :HomeComponent},
  {path :'admin',canActivate :[adminAuthGuard] ,loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule)},
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46
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
