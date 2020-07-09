import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  index(): Observable<Product[]> {
    const url = `${environment.apiUrl}/products`;
    return this.http.get<Product[]>(url);
  }

  getById(id: number): Observable<Product> {
    const url = `${environment.apiUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }

  store(product: Product): Observable<Product> {
    const url = `${environment.apiUrl}/products`;
    const reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.authService.getToken()
        });
    return this.http.post<Product>(url, product, { headers: reqHeader });
  }

  update(product: Product): Observable<Product> {
    const url = `${environment.apiUrl}/products/${product.id}`;
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.put<Product>(url, product, { headers: reqHeader });
  }

  delete(id: number): Observable<Product> {
    const url = `${environment.apiUrl}/products/${id}`;
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.delete<Product>(url, { headers: reqHeader });
  }

}
