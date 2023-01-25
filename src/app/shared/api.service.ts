import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postCustomer(data : any){
    debugger;
    return this.http.post<any>("http://localhost:8080/addCustomer",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getCustomer(){
    return this.http.get<any>("http://localhost:8080/getCustomer")
    .pipe(map((res:any)=>{
      debugger;
      return res;
    }))
  }
  updateCustomer(data : any,id:number){
    return this.http.post<any>("http://localhost:8080/updateCustomer/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteCustomer(id:number){
    debugger;
    return this.http.get<any>("http://localhost:8080/deleteCustomer/"+id)
    .pipe(map((res:any)=>{
      debugger;
      return res;
    }))
  }
  
}
