import { Component, OnInit } from '@angular/core';
import { EduserviceService } from '../eduservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: []
})
export class UpdateComponent implements OnInit {
  allvideo: any = [];
  constructor(private q: EduserviceService, private route: Router) { }

  ngOnInit() {
    this.q.readCourse().subscribe(k => { this.allvideo = k['coursedata'] });
  }
  data: any = [];
  Sendtodelete(k) {
    this.data = k;
  }
  DeleteRecord() {
    this.q.deleteCourse(this.data._id).subscribe(k => {
      this.q.readCourse().subscribe(k => { this.allvideo = k['coursedata'] });
    })
  }
  Sendtoupdate(k) {
    this.q.SendtoVideo(k);
this.route.navigate(['/Edit'])

  }
}
