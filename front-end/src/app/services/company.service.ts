import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  index(): Observable<Company[]> {
    const url = `${environment.apiUrl}/companys`;
    return this.http.get<Company[]>(url);
  }

  store(company: Company): Observable<Company> {
    const url = `${environment.apiUrl}/companys`;
    return this.http.post<Company>(url, company);
  }
}
