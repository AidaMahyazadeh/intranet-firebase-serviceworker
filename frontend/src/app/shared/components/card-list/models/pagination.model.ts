import { CardItem } from "./card-item.model";

export class Pagination {
   pageIndex!: number;
   pageSize !: number;
   totalCount?:number=0;

   constructor(data?: any) {
      Object.assign(this, data)
   }

}



