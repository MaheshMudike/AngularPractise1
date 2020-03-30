import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    return  this.http.get(`${environment.Node_API}/getStudents`);
  }
  getDataId(id){
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
    return  this.http.get(`${environment.Node_API}/getStudentsofRank/${id}`);
  }
  addData(data){
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
    return  this.http.post(`${environment.Node_API}/addStudents` , data, httpOptions);
  }
  deleteData(data){
    console.log(data)
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'text' 
    })
  
  } 
    return  this.http.get(`${environment.Node_API}/deleteStudents?id=${data}`);
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
