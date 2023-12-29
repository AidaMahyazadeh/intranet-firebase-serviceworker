import { Observable } from "rxjs";
import { CoursesListService } from "src/app/core/services/admin/courses-list.service";
import { CardItem } from "src/app/shared/components/card-list/models/card-item.model";
import { CardListDataSource } from "src/app/shared/components/card-list/models/card-list.datasource"
import { Pagination } from "src/app/shared/components/card-list/models/pagination.model";

export class CourseDatasource extends CardListDataSource<any>{

    constructor(public service: CoursesListService){
        super();
    }
    public override loadData$(pageFilter: Pagination): Observable<CardItem[]> {
        return this.service.getAllCourses()
    }}