import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { ListFormComponent } from './list-form/list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    ListFormComponent
  ],
  imports: [
    BrowserModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
