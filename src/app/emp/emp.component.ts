import { Component, OnInit } from '@angular/core';
import { Emp } from './emp';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  emp= new Emp()
  emparr:Array<Emp>= new Array()
  add(){
    console.log(this.emparr)
    this.emparr.push(this.emp);
    this.emp = new Emp();
  }
  constructor() { }

  ngOnInit() {
  }

}
