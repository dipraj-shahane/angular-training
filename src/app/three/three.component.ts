import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  providers:[CounterService]
})
export class ThreeComponent implements OnInit {
  handleClick(){
    this.counter.incr()
  }
  constructor(private counter:CounterService) { }

  ngOnInit() {
  }

}
