import { Employee } from './../../model/employee';
import { EmployeeServiceService } from './../../service/employee-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  employees: Array<any> = new Array();
  message = 'Click on a button';
  textAddBtnConfig = {
    styles: {
      classes: [
        'bg-green-500',
        'hover:bg-green-700',
        'text-white',
        'rounded',
        'p-2',
        'ml-10',
        'mt-10',
      ],
    },
    text: 'Add Employee',
  };

  constructor(
    private employeeService: EmployeeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService
      .getAllEmployees()
      .subscribe((response: Array<Employee>) => {
        this.employees = response;
      });
  }

  // button click events
  addEmployeeButton(): void {
    this.router.navigate(['/add']);
  }

  editEmployeeButton(): void {
    // TODO: should redirect to edit page
    console.log('Employee edit button clicked');
  }

  deleteEmployeeButton(id: number): void {
    // TODO: should delete from table
    console.log('Employee delete button clicked');
  }
}
