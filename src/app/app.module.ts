import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { ListFormComponent } from './list-form/list-form.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListDetailComponent,
    StrikethroughDirective,
    ListFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
