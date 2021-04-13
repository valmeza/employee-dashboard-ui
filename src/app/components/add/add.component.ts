import { EmployeeServiceService } from './../../service/employee-service.service';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee?: Employee;
  textAddBtnConfig = {
    styles: {
      classes: [
        'bg-green-500',
        'hover:bg-green-700',
        'text-white',
        'rounded',
        'p-2',
        'self-center',
        'mx-36'
      ],
    },
    text: 'Add Employee',
    type: 'submit'
  };

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void { }

  onSubmit(): void {
    this.newEmployee = this.employeeForm.value;
    this.employeeService.addNewEmployee(this.newEmployee).subscribe()

  }
}
