import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  url: string = environment.url;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.url}/employees`);
  }
}
