import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable, of } from 'rxjs';
import { IProfessor } from '../../models/professor.model';
import { Page, PageRequest } from 'src/app/admin/professors/page';
import { delay, map, switchMap } from 'rxjs/operators';

export interface UserQuery {
  search: string;
  registration: Date;
}
=======
import { Observable, map } from 'rxjs';
import { IProfessor } from '../../models/professor.model';
import { Pagination } from 'src/app/shared/components/card-list/models/pagination.model';
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  professorsUrl = '../../assets/data/professore.data.json';
  professors!: IProfessor[];

  constructor(private http: HttpClient) {}

<<<<<<< HEAD
  getAllProfessore(): Observable<IProfessor[]> {
    return this.http.get<IProfessor[]>(this.professorsUrl);
  }

  addNewProfessor(newProfessor: IProfessor): Observable<IProfessor> {
    return this.http.put<IProfessor>(this.professorsUrl, newProfessor);
  }

  page(request: PageRequest<IProfessor>, query: UserQuery): Observable<Page<IProfessor>> {
    return this.getAllProfessore().pipe(
      switchMap(data => {
        let filteredUsers = data.map(item => {
          
          return item;
        });
  
        // let { search, registration } = query;
  
        // filteredUsers = filteredUsers.filter(({ name, username, email }) => {
        //   if (name && username && email) {
        //     return (
        //       name.toLowerCase().includes(search) ||
        //       username.toLowerCase().includes(search) ||
        //       email.toLowerCase().includes(search)
        //     );
            
        //   }
        //   return false;
        // });
  
        // if (registration) {
        //   filteredUsers = filteredUsers.filter(({ registrationDate }) => {
        //     if (registrationDate) {
        //       return (
        //         registrationDate.getFullYear() === registration.getFullYear() &&
        //         registrationDate.getMonth() === registration.getMonth() &&
        //         registrationDate.getDate() === registration.getDate()
        //       );
        //     }
        //     return false;
        //   });
        // }
  
        // ... rest of your sorting and pagination logic ...
  
        const start = request.page * request.size;
        const end = start + request.size;
        const pageUsers = filteredUsers.slice(start, end);
  
        const page: Page<IProfessor> = {
          content: pageUsers,
          number: request.page,
          size: request.size,
          totalElements: filteredUsers.length
        };
        console.log(page);
  
        return of(page);
      }),
      delay(500)
    );
  }
=======
  getAllProfessore$(pageFilter:Pagination):Observable<IProfessor[]>{
    return this.http.get<IProfessor[]>(this.professorsUrl)
  }

  addNewProfessor$(newProfessor :IProfessor ):Observable<IProfessor>{
    return this.http.put<IProfessor>(this.professorsUrl,newProfessor)
  }

  paginate(pageFilter:Pagination,professors:IProfessor[]){
    const startIndex = pageFilter.pageIndex*pageFilter.pageSize;
    const endIndex= (pageFilter.pageIndex*pageFilter.pageSize)+pageFilter.pageSize
    this.professors=professors
   return this.professors.slice(startIndex,endIndex)
   }
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46
  
}
