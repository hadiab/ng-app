import { FormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
   declarations: [
      EmployeesComponent,
      EditEmployeeComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      EmployeesRoutingModule
   ]
})
export class EmployeesModule { }
