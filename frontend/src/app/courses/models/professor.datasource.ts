import { Observable, map } from "rxjs";
import { ProfessorService } from "src/app/core/services/admin/professor.service";
import { CardItem } from "src/app/shared/components/card-list/models/card-item.model";
import { CardListDataSource } from "src/app/shared/components/card-list/models/card-list.datasource";
import { Pagination } from "src/app/shared/components/card-list/models/pagination.model";



export class ProfessorDatasource extends CardListDataSource<any>{
   
   constructor(public professorService :ProfessorService){
    super()
   }

   public override loadData$(pageFilter: Pagination): Observable<CardItem[]> {
    return this.professorService.getAllProfessore$(pageFilter).pipe(
        map((professor)=>professor.map(p=> new CardItem(p)))
    )
}
}