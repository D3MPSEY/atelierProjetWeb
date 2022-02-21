import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from '../models/auth/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  login(credentials: Login): Observable<any> {
    return this.httpClient.post('/api/login', credentials);
  }

}