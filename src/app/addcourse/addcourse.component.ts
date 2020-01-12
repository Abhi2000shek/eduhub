import { Component, OnInit } from '@angular/core';
import { EduserviceService } from '../eduservice.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  constructor(private q: EduserviceService) { }
  isAdded = false;
  ngOnInit() {
  }
  AddCourse(cd) {
    this.q.addCourse(cd.value).subscribe(k => {
    this.isAdded = true;
    });
  }
}
 