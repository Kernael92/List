import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists: string[];
  constructor(){
     this.lists = ["Work on assignment","Go to the gym", "Apply for a job", "Apply for an Australian scholarship", "Learn php", "Research more on Angular"];
 }
}
