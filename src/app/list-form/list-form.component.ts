import { Component, OnInit } from '@angular/core';
import {List} from '../list'
@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {
   newList = new List(0,",",new Date());

  constructor() { }

  ngOnInit() {
  }

}
