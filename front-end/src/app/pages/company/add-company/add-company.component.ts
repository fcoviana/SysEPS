import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ErroMsgComponent } from '../../../compartilhado/erro-msg/erro-msg.component';
import { SucessoMsgComponent } from '../../../compartilhado/sucesso-msg/sucesso-msg.component';

import { FormCompanyComponent } from 'src/app/compartilhado/form-company/form-company.component';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  @ViewChild(ErroMsgComponent, {static: true}) errorMsgComponent: ErroMsgComponent;
  @ViewChild(SucessoMsgComponent, {static: true}) sucessoMsgComponent: SucessoMsgComponent;
  @ViewChild(FormCompanyComponent, {static: true}) formCompanyComponent: FormCompanyComponent;


  constructor(private activeModal: NgbActiveModal,
              private companyService: CompanyService) { }

  ngOnInit() {
  }

  store(company: Company) {
    this.companyService.store(company).subscribe(() => {
      this.validaFormCadastro();
      this.sucessoMsgComponent.setSucesso('Empresa cadastrada com sucesso.');
    }, () => { this.errorMsgComponent.setErro('Falha ao cadastrar Empresa.'); });
  }

  // limpaFormulario(usuario: Usuario) {
  //   this.activeModal.close();
  //   usuario.name = '';
  //   usuario.email = '';
  //   usuario.password = '';
  // }

  validaFormCadastro() {
    this.formCompanyComponent.formStatus = false;
    setTimeout(() => {
      this.formCompanyComponent.formStatus = true;
      this.activeModal.close();
    }, 2000);
  }

}
