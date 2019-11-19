import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate 
{
  constructor(public router:Router)
  {

  } 

  IsLoggedIn()
  {
    return (sessionStorage.getItem("isloggedIn") == "1");
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.IsLoggedIn())
    {
      return true;
    }
    else
    {
           this.router.navigate(['login']);
      return false;    
    }
  }

  Login(credentials: any)
  {
    
console.log(credentials);
    if(credentials.name=="abc" && 
        credentials.password=="abc@123")
    {
      sessionStorage.setItem("isLoggedIn", "1");
      return true;
    }
    else
    {
      return false;
    }
  }

  Logout(){
    console.log("adj");
    //sessionStorage.setItem("IsLoggedIn", "0");
    this.router.navigate(['login']);
  }

}



