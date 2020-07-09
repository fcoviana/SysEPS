import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErroMsgComponent } from '../../../compartilhado/erro-msg/erro-msg.component';
import { SucessoMsgComponent } from '../../../compartilhado/sucesso-msg/sucesso-msg.component';

import { FormProductComponent } from 'src/app/compartilhado/form-product/form-product.component';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @ViewChild(ErroMsgComponent, {static: true}) errorMsgComponent: ErroMsgComponent;
  @ViewChild(SucessoMsgComponent, {static: true}) sucessoMsgComponent: SucessoMsgComponent;
  @ViewChild(FormProductComponent, {static: true}) formProductComponent: FormProductComponent;

  public product: Product;
  public productId: number;

  constructor(private activeModal: NgbActiveModal, private productService: ProductService) {

  }

  ngOnInit() {

  }

  update(product: Product) {
    this.productService.update(product)
      .subscribe(() => {
        this.closeFormEditProduct();
        this.sucessoMsgComponent.setSucesso('Produto editada com sucesso.');
      }, () => { this.errorMsgComponent.setErro('Falha ao atualizar Produto.'); });
  }

  closeFormEditProduct() {
    this.formProductComponent.formStatus = false;
    setTimeout(() => {
      this.formProductComponent.formStatus = true;
      this.activeModal.close();
    }, 2000);
  }

}
