import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import {AgeType} from './AgeType';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  public date : any;
  public age : AgeType = new AgeType();
  myimage:string="";
  under5y:string="assets/images/5y.jpg"
  under10y:string="assets/images/10y.jpg";
  young:string = " assets/images/y.jpg ";
  midAge:string= "assets/images/mid.jpg" ;
  oldAge:string="assets/images/old.jpg";
  teen:string="assets/images/today.jpg"
  
  
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getAge()
  {

  /*  this.http.get<any>('http://localhost:8080/home?birthDate='+this.date).subscribe(data => {
  this.age = data;
  
   
  })*/  
 var today = moment();
 var ageDuration= moment.duration( today.diff(this.date));
 this.age.months = ageDuration.months();
 this.age.days = ageDuration.days();
 this.age.years= ageDuration.years();
  console.log(ageDuration.days());
  if(this.age.years>1 && this.age.years <=5){
    this.myimage=this.under5y 
   }
   else if(this.age.years>5 && this.age.years <=10){
    this.myimage=this.under10y 
   }

  else if(this.age.years>20 && this.age.years <=30){
   this.myimage=this.young 
  }
  else if(this.age.years>30 &&this.age.years<60 ){
    this.myimage=this.midAge

  }
  else if(this.age.years>=60){
    this.myimage=this.oldAge;
  }
  else if(this.age.years>10 && this.age.years<=20){
    this.myimage=this.teen
  }
       
}
}


