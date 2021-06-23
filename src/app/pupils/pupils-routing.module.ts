import { EditPupilsComponent } from './edit-pupils/edit-pupils.component';
import { PupilsComponent } from './pupils.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: "", component: PupilsComponent },
   { path: "edit/:id", component: EditPupilsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PupilsRoutingModule { }
