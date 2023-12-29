import { Observable } from "rxjs";

export class Pagination {
   page!:number;
   size !:number;
//    length !:number;

   constructor(data?: any) {
    Object.assign(this, data)
}
}

// export interface Page<T>{
//     content:T[];
//     size:number;
//     number:number;
//     length:number
// }

// export type paginationEndPoint<T> =(req:Pagination)=>Observable<Page<T>>