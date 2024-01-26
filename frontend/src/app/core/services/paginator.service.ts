import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class PaginatorService extends MatPaginatorIntl{
  override  getRangeLabel = (page :number,pageSize:number,length :number) =>{
     return `Page ${page+1} of ${Math.ceil(length/pageSize)}`
    }
}