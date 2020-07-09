import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErroMsgComponent } from '../../../compartilhado/erro-msg/erro-msg.component';
import { SucessoMsgComponent } from '../../../compartilhado/sucesso-msg/sucesso-msg.component';
import { FormStoreComponent } from 'src/app/compartilhado/form-store/form-store.component';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.scss']
})
export class EditStoreComponent implements OnInit {
  @ViewChild(ErroMsgComponent, {static: true}) errorMsgComponent: ErroMsgComponent;
  @ViewChild(SucessoMsgComponent, {static: true}) sucessoMsgComponent: SucessoMsgComponent;
  @ViewChild(FormStoreComponent, {static: true}) formStoreComponent: FormStoreComponent;

  public store: Store;
  public storeId: number;

  constructor(private activeModal: NgbActiveModal, private storeService: StoreService) {

  }

  ngOnInit() {

  }

  update(store: Store) {
    this.storeService.update(store)
      .subscribe(() => {
        this.closeFormEditStore();
        this.sucessoMsgComponent.setSucesso('Loja editada com sucesso.');
      }, () => { this.errorMsgComponent.setErro('Falha ao atualizar Loja.'); });
  }

  closeFormEditStore() {
    this.formStoreComponent.formStatus = false;
    setTimeout(() => {
      this.formStoreComponent.formStatus = true;
      this.activeModal.close();
    }, 2000);
  }

}
