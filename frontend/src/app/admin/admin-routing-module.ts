import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
 
import { ProfessorsComponent } from "./professors/professors.component";
import { CourselistComponent } from "./courselist/courselist.component";
import { UserlistComponent } from "./userlist/userlist.component";

const routes :Routes =[
 
    {path :'',component:AdminComponent,children:[
        {path :'users-list',component :UserlistComponent},
        {path :'courses-list',component :CourselistComponent},
        {path :'professors-list',component:ProfessorsComponent}
    ]}
]
    

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }