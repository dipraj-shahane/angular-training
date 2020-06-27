import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers:[CounterService]
})
export class TwoComponent implements OnInit {
  handleClick(){
    this.counter.incr()
  }
  constructor(private counter:CounterService) { }

  ngOnInit() {
  }

}
