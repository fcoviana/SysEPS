import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormLoginComponent } from 'src/app/compartilhado/form-login/form-login.component';
import { AuthService } from './services/auth.service';
import { AddCompanyComponent } from './pages/company/add-company/add-company.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

@ViewChild(FormLoginComponent, {static: true}) formLoginComponent: FormLoginComponent;

  title = 'casa-magalhaes';

  display = '';

  closeResult: string;

  public company: any[];

  constructor(private modalService: NgbModal, private authService: AuthService) { }

  ngOnInit() {
    this.showToken();
    this.company = this.authService.getCompany();
  }

  mudarDisplay() {
    this.display === 'none' ? this.display = 'list-item' : this.display = 'none';
  }

  openModalCompany() {
    const modalRef = this.modalService.open(AddCompanyComponent);
  }

  openModalLogin() {
    const modalRef = this.modalService.open(FormLoginComponent);
    modalRef.result.then( () => {
      this.company = this.authService.getCompany();
    });
  }

  showToken(): string {
    return this.authService.getToken();
  }

  logout() {
    this.authService.logout();
    this.company = null;
  }

}

