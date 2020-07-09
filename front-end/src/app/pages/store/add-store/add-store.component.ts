import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ErroMsgComponent } from '../../../compartilhado/erro-msg/erro-msg.component';
import { SucessoMsgComponent } from '../../../compartilhado/sucesso-msg/sucesso-msg.component';

import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/models/store';
import { AuthService } from 'src/app/services/auth.service';
import { FormStoreComponent } from 'src/app/compartilhado/form-store/form-store.component';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss']
})
export class AddStoreComponent implements OnInit {
  @ViewChild(ErroMsgComponent, { static: true }) errorMsgComponent: ErroMsgComponent;
  @ViewChild(SucessoMsgComponent, { static: true }) sucessoMsgComponent: SucessoMsgComponent;
  @ViewChild(FormStoreComponent, { static: true }) formStoreComponent: FormStoreComponent;

  company: any[];

  constructor(private activeModal: NgbActiveModal,
    private storeService: StoreService,
    private authService: AuthService) { }

  ngOnInit() {
    this.company = this.authService.getCompany();
    console.table(this.company);
  }


  store(store: Store) {
    //store.company_id = this.company.id;
    this.storeService.store(store).subscribe(() => {
      this.validaFormAdd();
      this.sucessoMsgComponent.setSucesso('Loja cadastrada com sucesso.');
    }, () => { this.errorMsgComponent.setErro('Falha ao cadastrar Loja.'); });
  }

  // limpaFormulario(usuario: Usuario) {
  //   this.activeModal.close();
  //   usuario.name = '';
  //   usuario.email = '';
  //   usuario.password = '';
  // }

  validaFormAdd() {
    this.formStoreComponent.formStatus = false;
    setTimeout(() => {
      this.formStoreComponent.formStatus = true;
      this.activeModal.close();
    }, 2000);
  }

}
