import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EduserviceService {
  constructor(private q: HttpClient) { }
  private baseUrl: string = "http://localhost:3000";
  addCourse(cd) {
    return this.q.post(this.baseUrl + '/addCourse', cd)
  }
  readCourse() {
    return this.q.get(this.baseUrl + '/readCourse')
  }
  deleteCourse(id) {
    return this.q.delete(this.baseUrl + '/deleteCourse/' + id)
  }

  private obj: any = [];
  SendtoVideo(videodata) {
    this.obj = videodata;
  }
  FetchfromVideo() {
    return this.obj;
  }
  updateCourse(cd) {
    return this.q.put(this.baseUrl + '/updatecourse', cd)
  }
}
