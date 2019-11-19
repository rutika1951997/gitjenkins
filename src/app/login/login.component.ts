import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  constructor(public Service:AuthService , public router:Router) { } 

  ngOnInit() {
  }
  Login(crediantials){
    console.log(crediantials);
    let isLoggedIn=this.Service.Login(crediantials);
    
    if(isLoggedIn)
    {
    
      this.router.navigate(['home']);
    }
    else
    {
      this.message="Something Went Wrong";
    }


  }
  Logout()
{
     let data=this.Service.Logout();

}

}
