import { NgModule } from "@angular/core";
import { CardListComponent } from "./components/card-list/card-list.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[
      CommonModule,
      MatCardModule,
      MatPaginatorModule
    ],
    declarations:[
        CardListComponent,
       PaginationComponent
    ],
    exports:[
      CardListComponent,
      PaginationComponent
    ]
})
export class SharedModule{}