import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: "", component: HomeComponent },
   {
      path: "teachers",
      loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule)
   },
   {
      path: "pupils",
      loadChildren: () => import('./pupils/pupils.module').then(m => m.PupilsModule)
   },
   {
      path: "employees",
      loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
