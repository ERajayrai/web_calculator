import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  public date : any;
  public age : any;
  myimage:string= "assets/images/today.jpg";
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getAge()
  {
    this.http.get<any>('http://18.217.52.34:8080/home?birthDate='+this.date).subscribe(data => {
      this.age = data;
      console.log(data);
  })   
  }

}
