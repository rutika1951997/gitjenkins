import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp;
  message;
  No;

  constructor(public routes:ActivatedRoute,
              public service: DataService,
              public router:Router )
               {
                 //this.message="";
                 this.routes.paramMap.subscribe((params)=>{
                   this.No=params.get("No");
                   console.log(params.get("No"));
                   alert("edit .."+this.No);
                 })

            this.service.getDataById(this.No).subscribe((response)=>{
              this.emp=response[0];
              console.log(this.emp);
            });     
                }
  Update()
  {
    
    console.log(this.emp);
    this.service.Update(this.emp).subscribe((result:any)=>{
        if(result.affectedRows > 0)
        {
          this.router.navigate(['home']);
        }
        else
        {
          this.message("Something went Wrong");
        }
    })
  }

  ngOnInit() {
    let parameterArrivalStatus=this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
      let No=params.get("No");
});

}
}
