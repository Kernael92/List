import { Component, OnInit } from '@angular/core';
import {List} from '../list'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
   lists = [
      new List(1, 'Apply for a scholarship', 'Education is key', new Date(2018,0,5)),<br>
      new List(2, 'Do assignment','Familiarization with the topics covered is necessary', new Date(2018,8,10)),<br>
      new List(3, 'Learn php', 'I want to be a great developer', new Date(2018,9,11)),<br>
      new List(4, 'Research more on angular', 'A platform for building mobile and desktop client side apps', new Date(2018,11,8)),<br>
      new List(5, 'Work out', 'Great health is key to a great life', new Date(2018,6,12)),<br>
   ]
   toggleDetails(index){
      this.lists[index].showDescription = !this.lists[index].showDescription;
   }
   deleteList(isComplete,index){
      if(isComplete){
         let toDelete=confirm("Are you sure you want to delete ${this.goals[index].name}")

         if (toDelete){
            this.lists.splice(index,1)
         }
      }
   }

   addNewList(list) {
      let listLength = this.lists.length:
      list.id = listLength+1;
      list.completeDate = new Date(list.completeDate);
      this.lists.push(list)
   }
  constructor() { }

  ngOnInit() {
  }

}
