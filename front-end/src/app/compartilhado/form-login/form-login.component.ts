import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { ErroMsgComponent } from '../../compartilhado/erro-msg/erro-msg.component';
import { SucessoMsgComponent } from '../../compartilhado/sucesso-msg/sucesso-msg.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  @ViewChild(ErroMsgComponent, {static: true}) errorMsgComponent: ErroMsgComponent;
  @ViewChild(SucessoMsgComponent, {static: true}) sucessoMsgComponent: SucessoMsgComponent;

  public login: any;

  constructor(private activeModal: NgbActiveModal,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(form): void {
    this.authService.login(form.value).subscribe(res => {
      this.login = res;
      this.validaFormLogin();
      this.sucessoMsgComponent.setSucesso('Logado com sucesso.');
    }, () => { this.errorMsgComponent.setErro('E-mail ou senha incorretos.'); });
  }

  validaFormLogin() {
    setTimeout(() => {
      this.activeModal.close();
    }, 2000);
  }
}
