import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  handleClick() {
    this.counter.incr()
  }
  constructor(private counter: CounterService) { }

  ngOnInit() {
  }

}
