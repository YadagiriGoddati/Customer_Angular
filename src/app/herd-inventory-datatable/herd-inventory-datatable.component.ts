import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herd-inventory-datatable',
  templateUrl: './herd-inventory-datatable.component.html',
  styleUrls: ['./herd-inventory-datatable.component.css']
})
export class HerdInventoryDatatableComponent implements OnInit {

  constructor() { }

  mainCheckselect:boolean=false;
  public data = [
  {id:'1',select: false ,phn:'1G',name: 'MR 1G', sex: 'Bull', birthdate:'01/10/19',pastusers:'pasture #7',sire:'A368',dam:'675X',age:'3 mo 12 d',birthwt:'66',breed:'brangus',status:'Active',edit:''},
  {id:'2',select: false ,phn:'IZ',name: 'MISSJB IZ', sex: 'Cow', birthdate:'01/01/12',pastusers:'pasture #3',sire:'',dam:'JSOT',age:'7 yr 3 mo 21 d	',birthwt:'74',breed:'erangus',status:'Active',edit:''},
  {id:'3',select: false ,phn:'2F',name: 'MS 2F', sex: 'Cow', birthdate:'01/18/18',pastusers:'pasture #4',sire:'W517',dam:'24V',age:'1 yr 3 mo 4 d	',birthwt:'61',breed:'brangus',status:'Active',edit:''},
  {id:'4',select: false ,phn:'1G',name: 'MR 1G', sex: 'Bull', birthdate:'01/10/19',pastusers:'pasture #7',sire:'A368',dam:'675X',age:'3 mo 12 d',birthwt:'66',breed:'brangus',status:'Active',edit:''},
  {id:'5',select: false ,phn:'IZ',name: 'MISSJB IZ', sex: 'Cow', birthdate:'01/01/12',pastusers:'pasture #3',sire:'',dam:'JSOT',age:'7 yr 3 mo 21 d	',birthwt:'74',breed:'erangus',status:'Active',edit:''},
  {id:'6',select: false ,phn:'2F',name: 'MS 2F', sex: 'Cow', birthdate:'01/18/18',pastusers:'pasture #4',sire:'W517',dam:'24V',age:'1 yr 3 mo 4 d	',birthwt:'61',breed:'brangus',status:'Active',edit:''},
  {id:'7',select: false ,phn:'1G',name: 'MR 1G', sex: 'Bull', birthdate:'01/10/19',pastusers:'pasture #7',sire:'A368',dam:'675X',age:'3 mo 12 d',birthwt:'66',breed:'brangus',status:'Active',edit:''},
  {id:'8',select: false ,phn:'IZ',name: 'MISSJB IZ', sex: 'Cow', birthdate:'01/01/12',pastusers:'pasture #3',sire:'',dam:'JSOT',age:'7 yr 3 mo 21 d	',birthwt:'74',breed:'erangus',status:'Active',edit:''},
  {id:'9',select: false ,phn:'2F',name: 'MS 2F', sex: 'Cow', birthdate:'01/18/18',pastusers:'pasture #4',sire:'W517',dam:'24V',age:'1 yr 3 mo 4 d	',birthwt:'61',breed:'brangus',status:'Active',edit:''},
  {id:'10',select: false ,phn:'1G',name: 'MR 1G', sex: 'Bull', birthdate:'01/10/19',pastusers:'pasture #7',sire:'A368',dam:'675X',age:'3 mo 12 d',birthwt:'66',breed:'brangus',status:'Active',edit:''},
  {id:'11',select: false ,phn:'IZ',name: 'MISSJB IZ', sex: 'Cow', birthdate:'01/01/12',pastusers:'pasture #3',sire:'',dam:'JSOT',age:'7 yr 3 mo 21 d	',birthwt:'74',breed:'erangus',status:'Active',edit:''},
  {id:'12',select: false ,phn:'2F',name: 'MS 2F', sex: 'Cow', birthdate:'01/18/18',pastusers:'pasture #4',sire:'W517',dam:'24V',age:'1 yr 3 mo 4 d	',birthwt:'61',breed:'brangus',status:'Active',edit:''},
  {id:'13',select: false ,phn:'1G',name: 'MR 1G', sex: 'Bull', birthdate:'01/10/19',pastusers:'pasture #7',sire:'A368',dam:'675X',age:'3 mo 12 d',birthwt:'66',breed:'brangus',status:'Active',edit:''},
  {id:'14',select: false ,phn:'IZ',name: 'MISSJB IZ', sex: 'Cow', birthdate:'01/01/12',pastusers:'pasture #3',sire:'',dam:'JSOT',age:'7 yr 3 mo 21 d	',birthwt:'74',breed:'erangus',status:'Active',edit:''},
  {id:'15',select: false ,phn:'2F',name: 'MS 2F', sex: 'Cow', birthdate:'01/18/18',pastusers:'pasture #4',sire:'W517',dam:'24V',age:'1 yr 3 mo 4 d	',birthwt:'61',breed:'brangus',status:'Active',edit:''},
  {id:'16',select: false ,phn:'1G',name: 'MR 1G', sex: 'Bull', birthdate:'01/10/19',pastusers:'pasture #7',sire:'A368',dam:'675X',age:'3 mo 12 d',birthwt:'66',breed:'brangus',status:'Active',edit:''},
  {id:'17',select: false ,phn:'IZ',name: 'MISSJB IZ', sex: 'Cow', birthdate:'01/01/12',pastusers:'pasture #3',sire:'',dam:'JSOT',age:'7 yr 3 mo 21 d	',birthwt:'74',breed:'erangus',status:'Active',edit:''},
  {id:'18',select: false ,phn:'2F',name: 'MS 2F', sex: 'Cow', birthdate:'01/18/18',pastusers:'pasture #4',sire:'W517',dam:'24V',age:'1 yr 3 mo 4 d	',birthwt:'61',breed:'brangus',status:'Active',edit:''},
  
];
dtOptions: any = {};
displayStyle = "none";
ngOnInit(){
  this.dtOptions = {
    
    lengthMenu: [10, 20, 30, "All"],
    processing: true,
    dom: '<"top"lfBi<"clear">>rt<"bottom"p<"clear">>',
      buttons: [
           'csv', 'excel', 'pdfHtml5','print'
      ]
      
  };
  

}
openPopup() {
  this.displayStyle = "block";
}
closePopup() {
  this.displayStyle = "none";
}
onchangeData($event:any){
  const id=$event.target.value;
  const ischecked=$event.target.checked;  
  
  this.data=this.data.map((d)=>{
    if(d.id==id){
      d.select=ischecked;
      this.mainCheckselect=false;
      return d;
    }
    if(id==-1){
      d.select=this.mainCheckselect;
      return d;
    }
    return d;
    
  });
  console.log(this.data);

  
  
  
}
}
