import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProfessor } from '../../models/professor.model';
import { Pagination } from 'src/app/shared/components/card-list/models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  professorsUrl='../../assets/data/professore.data.json';
  professors !:IProfessor[];

  constructor(private http :HttpClient) { }

  getAllProfessore$(pageFilter:Pagination):Observable<IProfessor[]>{
    return this.http.get<IProfessor[]>(this.professorsUrl)
  }

  addNewProfessor$(newProfessor :IProfessor ):Observable<IProfessor>{
    return this.http.put<IProfessor>(this.professorsUrl,newProfessor)
  }

  paginate(pageFilter:Pagination){
    const startIndex = pageFilter.pageIndex*pageFilter.pageSize;
    const endIndex= (pageFilter.pageIndex*pageFilter.pageSize)+pageFilter.pageSize
   return this.professors?.slice(startIndex,endIndex)
   }
  
}
