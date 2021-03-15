import { Component,OnInit} from '@angular/core';
import{NgForm}             from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})






export class ContactusComponent  implements OnInit  {
  
/*  names:string[]=[];
 
addName(name:string)
{
 this.names.push(name);
}
delName(indexValue:number)
{
  this.names.splice(indexValue,1);
}
 salary:number=566;

s:number=20;

today=new Date();



names:string[]=[];
addName(name:any)
{
this.names.push(name);
}
deleteName(indexValue:any)
{
this.names.splice(indexValue,1);
}
statusOfEditElement:boolean=false;
nameToBeEdited:any;
ind:any;
editName(nameToBeEdit:any,i:any)
{
  this.nameToBeEdited=nameToBeEdit;
  this.statusOfEditElement=true;
  this.ind=i;
}
saveName(modifiedName:any)
{
  this.names.splice(this.ind,1,modifiedName);
  this.statusOfEditElement=false;
}*/


employees:any[]=[];
sendData(obj:NgForm)
{
  this.employees.push(obj.value);
}
  constructor() { }

  ngOnInit(): void { 
  }

  



}


