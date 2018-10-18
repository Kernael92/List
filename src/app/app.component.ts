import { Component } from '@angular/core';
import {List} from './list'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   lists = [
      new List(1, 'Apply for a scholarship'),
      new List(2, 'Do assignment'),
      new List(3, 'Learn php'),
      new List(4, 'Research more on angular'),
      new List(5, 'Work out'),
   ]
}
