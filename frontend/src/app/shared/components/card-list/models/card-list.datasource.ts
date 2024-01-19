import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { CardItem } from "./card-item.model";
import { BehaviorSubject, Observable, switchMap } from "rxjs";
import { Pagination } from "src/app/shared/components/card-list/models/pagination.model";


export abstract class CardListDataSource<T> extends DataSource<CardItem>{

  private cardItemSubject = new BehaviorSubject<CardItem[]>([]);
  get cardItem$(){ return this.cardItemSubject.asObservable()}
  set cardItem(value: CardItem[]) { this.cardItemSubject.next(value)}

  private paginationSubject = new BehaviorSubject<Pagination>(new Pagination({pageIndex:1, pageSize:4} as Pagination));
  get pagination$(){ return this.paginationSubject.asObservable()}
  set pagination(value: Pagination) { this.paginationSubject.next(value)}

  
  constructor() {
    super()
  }

  override connect(): Observable<CardItem[]> {
   return this.init()
  }

  override disconnect(collectionViewer: CollectionViewer): void {
    this.cardItemSubject.complete()
  }


  public init(){
   return this.pagination$.pipe(
      switchMap((pagination:Pagination) => this.loadData$(pagination))  
    )
  }
  
 
  public abstract loadData$(pageFilter: Pagination): Observable<CardItem[]>;

}

