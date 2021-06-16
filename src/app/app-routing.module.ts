import { EditTeacherComponent } from './teachers/edit-teacher/edit-teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: "teachers",
      children: [
         { path: "", component: TeachersComponent },
         { path: "edit/:id", component: EditTeacherComponent },
      ]
   },
   // {
   //    path: "pupils",
   //    component:
   // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
