import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetdatanodesqlService } from "./getdatanodesql.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    token ;
constructor(private getservice :GetdatanodesqlService){}
intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      request = request.clone({
        setHeaders: {
          authorization : 
          `Bearer  ${localStorage.getItem("theToken")}`
        }
      })
      return next.handle(request)
  }
    
}