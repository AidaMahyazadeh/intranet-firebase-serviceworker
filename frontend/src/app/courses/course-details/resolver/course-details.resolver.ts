import { inject } from '@angular/core';
import {  ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import ICourse from 'src/app/core/models/course.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Pagination } from 'src/app/shared/components/card-list/models/pagination.model';

export const courseDetailsResolver: ResolveFn<ICourse> = (route:ActivatedRouteSnapshot, state) => {
 const coursesService = inject(CoursesService)
 const courseDetailId = route.params['id']
 const pageIndex = +(route.queryParams['page'])
 const pageSize = +(route.queryParams['limit'])
 const pageFilter ={pageIndex,pageSize}
  // return coursesService.getCourseById(courseDetailId)

 return coursesService.getCourseById(courseDetailId,pageFilter)
   ;
};
