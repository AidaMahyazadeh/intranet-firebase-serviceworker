import { Observable, map } from "rxjs";
import ICourse from "src/app/core/models/course.model";
import { IProfessor } from "src/app/core/models/professor.model";
import { ProfessorService } from "src/app/core/services/admin/professor.service";
import { CardItem } from "src/app/shared/components/card-list/models/card-item.model";
import { CardListDataSource } from "src/app/shared/components/card-list/models/card-list.datasource";
import { Pagination } from "src/app/shared/components/card-list/models/pagination.model";

export class ProfessorCardItem extends CardItem {
    email!: string;
    gender!: string;
    courses!: ICourse[];
    username?: string;

    static create(professor: IProfessor): ProfessorCardItem {
      const professorCartItem=new ProfessorCardItem()
      professorCartItem.id=professor.id
      professorCartItem.name=professor.name
      professorCartItem.email=professor.email
      professorCartItem.gender=professor.gender
      professorCartItem.courses=professor.courses
      professorCartItem.username=professor.username
      return professorCartItem
    }
}

export class ProfessorDatasource extends CardListDataSource<any>{

    constructor(public professorService: ProfessorService) {
        super()
    }

    public override loadData$(pageFilter: Pagination): Observable<ProfessorCardItem[]> {
        return this.professorService.getAllProfessore$(pageFilter).pipe(
            map((professor) => professor.map(p => ProfessorCardItem.create(p)))
        )
    }
}