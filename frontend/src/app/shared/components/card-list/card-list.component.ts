import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { CardListDataSource } from './models/card-list.datasource';
import { CardItem } from './models/card-item.model';
import { Observable, map } from 'rxjs';
import { Pagination } from './models/pagination.model';
import { PageEvent } from '@angular/material/paginator';
import { CarditemService } from './models/carditem.service';
import ICourse from 'src/app/core/models/course.model';
import { IProfessor } from 'src/app/core/models/professor.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent<T> extends CardListDataSource<CardItem[]> implements OnInit {
 
  pageIndex: number = 1;
  pageSize: number = 4;
  totalCartItem :number =0;
  datasource !:  CardItem[]
  cartService =inject(CarditemService)
  @Input()data !: ICourse[] | IProfessor[]
 

  constructor() {
    super();
  }

  ngOnInit() {
    this.loadData$({ pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe(
     (res) =>{
        const startIndex = this.pageIndex*this.pageSize;
        const endIndex= (this.pageIndex*this.pageSize)+this.pageSize
        this.datasource=res.slice(startIndex,endIndex)
        console.log(res)
        // return this.datasource
      }
    )  
 }

  public override loadData$(pageFilter: Pagination): Observable<CardItem[]> {
   return this.cartService.getAllCartItem(pageFilter)
  }

  handelPage(event :PageEvent){
   this.pageIndex=(event.pageIndex)+1;
   console.log(this.pageIndex)
   this.pageSize= event.pageSize;
   this.totalCartItem=event.length
  }


}



// paginate(pageFilter:Pagination){
//   const startIndex = pageFilter.pageIndex*pageFilter.pageSize;
//   const endIndex= (pageFilter.pageIndex*pageFilter.pageSize)+pageFilter.pageSize
//  return this.cardItem?.slice(startIndex,endIndex)
//  }
// public override loadData$(pageFilter: Pagination): Observable<CardItem[]> {
//   return this.cardItem$.pipe(
//    map(()=> {return this.paginate(pageFilter)})
//   )
//  }