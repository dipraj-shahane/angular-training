import { Component } from '@angular/core';
import { RemoteService } from './remote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo Title';
  filename = "assets/logo1.jpg";
  
  method1() {
    console.log("method1 invoked ...")
    this.title = "Title Changed"
    this.filename = this.filename == "assets/logo1.jpg" ? "assets/logo2.jpg" : "assets/logo1.jpg";
  }

  name = 'Dipraj';
  marks = -100;
  message = "";

  myhandler(str) {
    console.log("in MyHandler of AppComponent with " + str);
    this.message = str;
    this.marks = 0;
  }

  obj = {};
  constructor(private remote: RemoteService) { }
  handleFetch() {
    console.log("handleFetch ")
    this.remote.fetchData("https://reqres.in/api/users/2").subscribe(
      (value) => { console.log("in next.."); console.log(value); this.obj = value['data']; },
      (err) => { console.log("in errr"); console.log(err) },
      () => { console.log("in Complete") }
    )
    console.log("handleFetch after get ")
  }

  handleSend() {
    let obj = {
      "name": "Test",
      "job": "testjob"
    }
    this.remote.sendData("https://reqres.in/api/users/2", obj).subscribe(
      (value) => { console.log(value) },
      (err) => { console.log(err) }
    )
  }
}
