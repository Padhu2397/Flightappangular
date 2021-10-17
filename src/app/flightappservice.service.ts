import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './Ticket';


@Injectable({
  providedIn: 'root'
})
export class FlightappserviceService {
  constructor(private httpClient: HttpClient) {}
    login(data: any): Observable<any>{
      return this.httpClient.post("http://localhost:8081/api/v1.0/flight/user/login",data);
    }
 
    register(data: any): Observable<any>{
      return this.httpClient.post("http://localhost:8081/api/v1.0/flight/user/register",data);
    }

    pnr(data: any): Observable<any>{
      return this.httpClient.get("http://localhost:8082/api/v1.0/flight/ticket/321",data);
    }

    history(data: any): Observable<any>{
      return this.httpClient.get("http://localhost:8082/api/v1.0/flight/booking/history/padhu@gmail.com",data);
    }

    cancel(data: any): Observable<any>{
      return this.httpClient.delete("http://localhost:8083/api/v1.0/flight/booking/cancel/321",data);
    }

    search(data: any): Observable<any>{
      return this.httpClient.delete("http://localhost:8081/api/v1.0/flight/search",data);
    }

    book(data: any): Observable<any>{
      return this.httpClient.delete("http://localhost:8081/api/v1.0/booking/123",data);
    }


   }
