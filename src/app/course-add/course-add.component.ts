import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  courseVenue=""
  
  constructor(private api:ApiService){}
  
  
  
  readValues = ()=>
  {
  
    let data={

      "courseTitle": this.courseTitle,
      "courseDesc": this.courseDescription,
      "venue": this.courseVenue,
      "duration": this.courseDuration,
      "date": this.courseDate
  }
  
  console.log(data)
  
  this.api.addCourse(data).subscribe(
    (response:any) => {
      console.log(response)
      if (response.status=="success") {
        alert("Course added succesfully ")
        this.courseTitle=""
        this.courseDate=""
        this.courseDuration=""
        this.courseVenue=""
        this.courseDescription=""
        
      } else {
  
        alert("course couldnt add ")
        
      }
    }
  )
  
  }}