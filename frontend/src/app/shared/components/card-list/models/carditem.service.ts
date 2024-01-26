import { Injectable } from '@angular/core';
import { Observable,  concat } from 'rxjs';
import { ProfessorService } from 'src/app/core/services/admin/professor.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CardItem } from './card-item.model';
import ICourse from 'src/app/core/models/course.model';
import { IProfessor } from 'src/app/core/models/professor.model';
import { Pagination } from './pagination.model';

@Injectable({
  providedIn: 'root'
})
export class CarditemService {
  private courses$ !: Observable<ICourse[]>
  private professores$ !: Observable<IProfessor[]>
  private cartItem$ !: Observable<any[]>
  private cartItem !: CardItem[]
  constructor(private courseService: CoursesService, private professorService: ProfessorService) { }


  getAllCartItem(pageFilter: Pagination) {
    this.courses$ = this.courseService.getAllCourses$(pageFilter)
    this.professores$ = this.professorService.getAllProfessore$(pageFilter)
    return this.cartItem$ = concat(this.courses$, this.professores$)
  }

  paginate(pageFilter: Pagination) {
    const startIndex = pageFilter.pageIndex * pageFilter.pageSize;
    const endIndex = (pageFilter.pageIndex * pageFilter.pageSize) + pageFilter.pageSize
    this.cartItem$.subscribe(res => {
      this.cartItem = res
      this.cartItem.slice(startIndex,endIndex)
    })
  }

}
