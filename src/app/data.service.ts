import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  DeleteData(empNo: any) {
    throw new Error("Method not implemented.");
  }

  constructor(public http: HttpClient) 
  {

  }

  GetData()
  {
   return this.http.get("http://localhost:4600/employees");
  }

  AddData(emp:any)
  {
    return this.http.post("http://localhost:4600/employees",
                          emp);
  }
  Delete(no:any)
  {
    return this.http.delete("http://localhost:4600/employees/"+no);
  }
  getDataById(no)
  {
    console.log(no);
    return this.http.get("http://localhost:4600/employees/" +no);
  }

  Update(emp)
  {
    console.log(emp.no);
    console.log(emp.name);
    console.log(emp.address);

    return this.http.put("http://localhost:4600/employees/" +emp.no,emp);
  }
}
