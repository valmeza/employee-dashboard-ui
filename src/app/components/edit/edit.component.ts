import { EmployeeServiceService } from './../../service/employee-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  updatedEmployee?: Employee;
  textAddBtnConfig = {
    styles: {
      classes: [
        'bg-green-500',
        'hover:bg-green-700',
        'text-white',
        'rounded',
        'p-2',
        'self-center',
        'mx-36',
      ],
    },
    text: 'Update Employee',
    type: 'submit',
  };

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    this.employeeService.getEmployeeById(1).subscribe((response) => {
      this.employeeForm.get('firstName')?.setValue(response.firstName);
      this.employeeForm.get('lastName')?.setValue(response.lastName);
      this.employeeForm.get('email')?.setValue(response.email);
    });
  }

  onSubmit(): void {}
}
