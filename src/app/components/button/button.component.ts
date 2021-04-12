import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // receives correct config from it's parent component
  @Input() buttonConfig: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
