import { Component, Input, OnInit, OnChanges,
   SimpleChanges, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit, OnChanges {
  @Input() 
  mrks=40
  
  @Output()
  wrongMarks:EventEmitter<String>=new EventEmitter()
  
  grade="Undefined"
  constructor(){
    console.log("in constructor " + this.mrks)
  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log("in ngOnChanges ")
    console.log(changes)
    this.findgrade();
  }
  ngOnInit(): void {
    console.log("in ngOnInit " + this.mrks)
    
  }
  findgrade(){
    if(this.mrks>100)
    {
      console.log("problem..")
      this.wrongMarks.emit("Invalid Marks " + this.mrks)

    }
    this.grade = this.mrks>=35?"Pass":"Fail"
  }

}
