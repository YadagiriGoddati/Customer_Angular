import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { data } from 'jquery';
import { CustomerModel } from './customermodule';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayStyle = "none";
  formValue !:FormGroup;
  showAdd !:boolean;
  showUpdate !:boolean;
 customerModelObj: CustomerModel =new CustomerModel() 
 customerData !:any; 
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

 
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
        firstName:[''],
        lastName:[''],
        age:[''],
       
      })
      this.getApiCall();
  }

  openPopup() {
    this.displayStyle = "block";
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  closePopup() {
    this.displayStyle = "none";
  }

  postCustomers(){
    debugger;
   this.customerModelObj.firstName=this.formValue.value.firstName;
   this.customerModelObj.lastName=this.formValue.value.lastName;
   this.customerModelObj.age=this.formValue.value.age;
  

    this.api.postCustomer(this.customerModelObj)
    .subscribe((res)=>{
      console.log(res);
      alert("Submitted Sucessfully")
      this.closePopup()
      this.formValue.reset();
      this.getApiCall()
    })
}
getApiCall(){
  this.api.getCustomer()
  .subscribe(res=>{
    this.customerData=res;
  })
}
deleteCustomer(row : any){
  this.api.deleteCustomer(row.customerId)
  .subscribe(res=>{
    alert("Customer deleted")
    this.getApiCall()
  })
}
onEdit(row:any){
  this.openPopup()

  this.showAdd=false;
  this.showUpdate=true;
  this.customerModelObj.customerId=row.customerId;
  this.formValue.controls['firstName'].setValue(row.firstName)
  this.formValue.controls['lastName'].setValue(row.lastName)
  this.formValue.controls['age'].setValue(row.age)
}
updatevalue(){
  this.customerModelObj.firstName=this.formValue.value.firstName;
  this.customerModelObj.lastName=this.formValue.value.lastName;
  this.customerModelObj.age=this.formValue.value.age;
  this.api.updateCustomer(this.customerModelObj,this.customerModelObj.customerId)
  .subscribe(res=>{
    alert("updated Sucessfully")
    this.closePopup()
    this.formValue.reset();
    this.getApiCall()
  })
}

}
