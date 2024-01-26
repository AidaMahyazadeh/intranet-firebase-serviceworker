import { Observable, map } from "rxjs";
import ICourse from "src/app/core/models/course.model";
import ILesson from "src/app/core/models/lesson.model";
import { CoursesService } from "src/app/core/services/courses.service";
import { CardItem } from "src/app/shared/components/card-list/models/card-item.model";
import { CardListDataSource } from "src/app/shared/components/card-list/models/card-list.datasource"
import { Pagination } from "src/app/shared/components/card-list/models/pagination.model";

export class CourseCardItem extends CardItem{
    author !:string;
    duration !:string;
    image !:string;
    description !:string;
    lessons !:ILesson[];
    students ?: number;

    static create(course:ICourse):CourseCardItem{
        const courseCartItem = new CourseCardItem()
        courseCartItem.id=course.id
        courseCartItem.name=course.name
        courseCartItem.author = course.author
        courseCartItem.description=course.description
        courseCartItem.duration=course.duration
        courseCartItem.image=course.image
        courseCartItem.lessons=course.lessons
        courseCartItem.students=course.students
        return courseCartItem
    }
}

export class CourseDatasource extends CardListDataSource<any>{

    constructor(private service: CoursesService){
        super();
    }


    public override loadData$(pageFilter: Pagination): Observable<CourseCardItem[]> {
        return this.service.getAllCourses$(pageFilter).pipe(
            map(course => course.map(c => CourseCardItem.create(c)))
        )
    }

    
}

 // public override loadData$(pageFilter: Pagination): Observable<CardItem[]> {
    //     return this.service.getAllCourses$(pageFilter).pipe(
    //         map(course => course.map(c =>new CourseCardItem(c)))
    //     )
    // }