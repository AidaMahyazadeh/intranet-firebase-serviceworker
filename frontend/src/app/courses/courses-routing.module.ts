import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { courseDetailsResolver } from "./course-details/resolver/course-details.resolver";



const routes :Routes =[
    {path:'',component :CoursesComponent},
    {path :':courseName/:id',component :CourseDetailsComponent,resolve :{courseDetails :courseDetailsResolver}}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class CoursesRoutingModule{}