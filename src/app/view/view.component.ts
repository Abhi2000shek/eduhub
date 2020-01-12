import { Component, OnInit } from '@angular/core';
import { EduserviceService } from '../eduservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  allvideo: any = [];
  constructor(private q: EduserviceService) { }

  ngOnInit() {
    this.q.readCourse().subscribe(k => { this.allvideo = k['coursedata'] });
  }
}
