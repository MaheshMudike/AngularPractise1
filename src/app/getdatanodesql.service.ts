import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdatanodesqlService {

  constructor(private http: HttpClient) { }

  getData(){
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
    return  this.http.get("http://10.80.0.51:8080/getStudents");
  }
  addData(data){
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
    return  this.http.post("http://10.80.0.51:8080/addStudents" ,data,httpOptions);
  }
  deleteData(data){
    console.log(data)
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'text' 
    })
  } 
    return  this.http.get(`http://10.80.0.51:8080/deleteStudents/?id=${data}` ,);
  }
}
//   authenticateData(data){
 
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//       })
//     }
//       return this.http.post("http://10.80.0.41:8080/login",data,httpOptions)
//   }
// }
