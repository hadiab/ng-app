import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesComponent } from './employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: "", component: EmployeesComponent },
   { path: "edit/:id", component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
