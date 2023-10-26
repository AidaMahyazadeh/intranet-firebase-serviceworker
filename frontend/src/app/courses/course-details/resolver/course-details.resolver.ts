import { inject } from '@angular/core';
import {  ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import ICourse from 'src/app/core/models/course.model';
import { CoursesService } from 'src/app/core/services/courses.service';

export const courseDetailsResolver: ResolveFn<ICourse> = (route:ActivatedRouteSnapshot, state) => {
 const coursesService = inject(CoursesService)
 const courseDetailId = route.params['id']
 return coursesService.getCourseById(courseDetailId)
   ;
};
