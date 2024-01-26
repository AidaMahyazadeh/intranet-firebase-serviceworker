import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from '../card-list/models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit,AfterViewInit {
  @Input() pageIndex: number= 1;
  @Input() pageSize: number=4 ;
  @Input() length!: number;
  // @Input() pagination : Pagination={pageIndex :1,pageSize:4}
  @Input() paginationOption = [4, 8, 12]
  @Output() changePage = new EventEmitter<PageEvent>()
  @ViewChild('paginator',{static:true}) pagination!: Pagination;


  constructor() { }

  ngOnInit() {
    this.pagination = {
      pageIndex: this.pageIndex, pageSize: this.pageSize
    }
  }

  ngAfterViewInit(): void {
    //  this.pagination = {
    //   pageIndex: this.pageIndex, pageSize: this.pageSize
    // }
  }


  handlePageEvent(event: PageEvent) {
    this.changePage.emit(event)

  }
}
