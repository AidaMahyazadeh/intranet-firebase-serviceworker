import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  enteredText !:string;
  @Output()searchedText= new EventEmitter<string>();

  onSearchText(){
    this.searchedText.emit(this.enteredText)
  }
}
