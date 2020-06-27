import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  constructor(private httpclient:HttpClient){
    
  }
  public sendData(url , data)  {
    return this.httpclient.post(url,data);
  }

  public fetchData(url){
    return this.httpclient.get(url);
  }

}
