import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  index(): Observable<Store[]> {
    const url = `${environment.apiUrl}/stores`;
    return this.http.get<Store[]>(url);
  }

  getById(id: number): Observable<Store> {
    const url = `${environment.apiUrl}/stores/${id}`;
    return this.http.get<Store>(url);
  }

  store(store: Store): Observable<Store> {
    const url = `${environment.apiUrl}/stores`;
    const reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.authService.getToken()
        });
    return this.http.post<Store>(url, store, { headers: reqHeader });
  }


  update(store: Store): Observable<Store> {
    const url = `${environment.apiUrl}/stores/${store.id}`;
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.put<Store>(url, store, { headers: reqHeader });
  }

  delete(id: number): Observable<Store> {
    const url = `${environment.apiUrl}/stores/${id}`;
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.delete<Store>(url, { headers: reqHeader });
  }

}
