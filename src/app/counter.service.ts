import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  mycounter=0
  public incr(){
    this.mycounter++;
  }
  public getCount(){
    return this.mycounter;
  }
  constructor() { 
    console.log("Constructor of CounterService")
  }
}
