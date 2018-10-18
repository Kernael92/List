import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../list'

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
   @Input() list:List;
   @Output() isComplete= new EventEmitter<boolean>();

   listDelete(complete:boolean){
      this.isComplete.emit(complete);
   }
  constructor() { }

  ngOnInit() {
  }

}
