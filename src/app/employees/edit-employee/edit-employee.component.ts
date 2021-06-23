import { Employee } from './../models/Employee';
import { EmployeesService } from './../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
   id: string|null = null
   employee: Employee = new Employee("", "", 0, "", "", "", 0, 0)

   constructor(
      private employeesService : EmployeesService,
      private route: ActivatedRoute,
      private router: Router
   ) { }

   ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
         this.id = params.get("id")

         if(this.id) {
            this.getEmployeeById(this.id)
         }
      })
   }

   getEmployeeById(id: string): void {
      this.employeesService.getEmployeeById(id).subscribe(employee => this.employee = employee)
   }

   submit(): void {
      this.router.navigate(['/employees'])
   }
}
