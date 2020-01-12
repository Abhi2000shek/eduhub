import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EduComponent } from './edu/edu.component';
import { EduserviceService } from './eduservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SafepipePipe } from './safepipe.pipe';
import { UpdateComponent } from './update/update.component';
import { EditComponent } from './edit/edit.component';
const myroute: Routes = [
  { path: 'Add Course', component: AddcourseComponent },
  { path: 'View', component: ViewComponent },
  { path: 'Home', component: EduComponent },
  { path: 'Update', component: UpdateComponent },
  { path: 'Edit', component: EditComponent },
  { path: '', component: EduComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    ViewComponent,
    EduComponent,
    SafepipePipe,
    UpdateComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [EduserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }