import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:DataService) { }

  ngOnInit() {
  }

  AddEmp(dataFromUI: any)
  {
    let emp= dataFromUI.form.value;
    console.log(emp);

    let StateOfResult= this.service.AddData(emp);

    StateOfResult.subscribe((result)=>{
      console.log(result);
    });
  }

}

