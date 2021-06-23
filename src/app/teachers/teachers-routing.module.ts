import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { TeachersComponent } from './teachers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: "", component: TeachersComponent },
   { path: "edit/:id", component: EditTeacherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
