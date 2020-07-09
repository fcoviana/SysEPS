import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { JwtResponseI } from '../models/jwt-response';
import { environment } from '../../environments/environment';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Company } from '../models/company';

@Injectable()
export class AuthService {

  authSubject = new BehaviorSubject(false);
  private token: string;
  public company: any[];

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(company: Company): Observable<JwtResponseI> {
    const companyLogin = { email: company.email, password: company.password };
    return this.httpClient.post<JwtResponseI>(`${environment.apiUrl}/sessions/login`,
    companyLogin).pipe(tap(
        (res: any) => {
          if (res) {        
            this.saveToken(res.token);
            //this.user = res.user;

            const jsonAux = JSON.stringify(res.company);

            localStorage.setItem('COMPANY_LOGADO', jsonAux);
            const jsonCompany = localStorage.getItem('COMPANY_LOGADO');
            this.company = JSON.parse(jsonCompany);

          }
        })
      );
  }

  logout(): void {
    this.token = '';
    this.company = null;
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_LOGADO');
    localStorage.removeItem('EXPIRES_IN');
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  private saveToken(token: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    this.token = token;
  }

  public getToken(): string {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  public getCompany(): any[] {
    if (!this.company) {
      const jsonCompany = localStorage.getItem('COMPANY_LOGADO');
      this.company = JSON.parse(jsonCompany);
    }
    return this.company;
  }

  public estaLogado() {
      return (this.getToken()) ? true : false;
  }

}
