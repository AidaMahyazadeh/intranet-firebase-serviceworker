import { Component, OnInit } from '@angular/core';
import { PaginatedDataSource} from '../professo-data-source';
import { ProfessorService, UserQuery } from 'src/app/core/services/admin/professor.service';
import { IProfessor } from 'src/app/core/models/professor.model';
import { Sort } from '../page';
import { ChangeDetectionStrategy } from '@angular/core';



@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessorListComponent implements OnInit {
  displayedColumns = ['id', 'username', 'email', 'courses']
  initialSort: Sort<IProfessor> = {property: 'username', order: 'asc'}

  ngOnInit(): void {
    this.data.page$.subscribe((page) => console.log('Page Data:', page));
      console.log(this.data);
      
  }

  data = new PaginatedDataSource<IProfessor, UserQuery>(
    (request, query) => this.users.page(request, query),
    this.initialSort,
    {search: '', registration: new Date()},
    2
  )

  constructor(private users: ProfessorService) {


  }
}
