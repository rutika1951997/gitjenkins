import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  employees ;
  message: string;

  constructor(public router: Router, private service:DataService) 
  {
    this.getData();
    
  }
  
  ngOnInit() 
  {
    console.log("Home Components Get Loaded");
    let resultstate=this.service.GetData();
    resultstate.subscribe((data)=>{
      this.employees=data;
    });
    
    
    // this.employees = [
    //   {no : 11, name: "rutika", address: "pune"},
    //   {no : 12, name: "pooja", address: "panji"},
    //   {no : 13, name: "abc", address: "mumbai"}
    // ];
  }
  ngOnDestroy()
  {
    console.log("Home components Destroyed....");
  }
  GoToRegister()
  {
   this.router.navigate(['register']); 
  }

  Delete(empNo)
  {
    let StatusOfDelete=this.service.Delete(empNo);
    StatusOfDelete.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.router.navigate(['/home']);
        this.getData();
      }
      else
      {
        this.message="Something went Wrong";
      }
    })
  }

  getData()
  {
    this.service.GetData().subscribe((response)=>{
        this.employees=response;
    })
  }
}


