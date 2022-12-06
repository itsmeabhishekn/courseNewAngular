import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseViewComponent } from './course-view/course-view.component';

const myRoute:Routes = [
  {path:"",component:CourseAddComponent},
  {path:"add",component:CourseAddComponent},
  {path:"view",component:CourseViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CourseAddComponent,
    CourseViewComponent
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
