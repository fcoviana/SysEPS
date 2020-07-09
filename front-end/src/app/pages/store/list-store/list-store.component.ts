import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ErroMsgComponent } from '../../../compartilhado/erro-msg/erro-msg.component';

//import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/models/store';
import { AddStoreComponent } from '../add-store/add-store.component';
import { EditStoreComponent } from '../edit-store/edit-store.component';

@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.scss']
})

export class ListStoreComponent implements OnInit {
  @ViewChild(ErroMsgComponent, {static: true}) erroMsgComponent: ErroMsgComponent;

  public stores: Store[];
  public storeSelected: Store;

  constructor(private storeService: StoreService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getStores();
  }

  openModalAddStore() {
    const modalRef = this.modalService.open(AddStoreComponent);
    modalRef.result.then(() => {
      this.getStores();
    });
  }

  openModalEditStore() {
    const modalRef = this.modalService.open(EditStoreComponent);
    modalRef.componentInstance.store = this.storeSelected;
  }

  getStores() {
    this.storeService.index()
    .subscribe((stores: Store[]) => {
      this.stores = stores;
    }, () => { this.erroMsgComponent.setErro('Falha ao buscar Lojas.'); });
  }

  delete() {
    this.storeService.delete(this.storeSelected.id)
    .subscribe(() => {
      this.getStores();
      this.storeSelected.id = 0;
    }, () => { this.erroMsgComponent.setErro('Falha ao deletar Loja.'); });
  }

}
