import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void { }

  onSubmit(): void {
    console.log(this.employeeForm.value);
  }
}
