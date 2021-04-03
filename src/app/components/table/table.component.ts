import { Employee } from './../../model/employee';
import { EmployeeServiceService } from './../../service/employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  employees: Array<any> = new Array();

  constructor(private employeeService: EmployeeServiceService) {}

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

  onDelete(id: number) {
    console.log(id);
  }
}
