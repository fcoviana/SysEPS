import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ErroMsgComponent } from '../../../compartilhado/erro-msg/erro-msg.component';
import { SucessoMsgComponent } from '../../../compartilhado/sucesso-msg/sucesso-msg.component';

import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { FormProductComponent } from 'src/app/compartilhado/form-product/form-product.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild(ErroMsgComponent, { static: true }) errorMsgComponent: ErroMsgComponent;
  @ViewChild(SucessoMsgComponent, { static: true }) sucessoMsgComponent: SucessoMsgComponent;
  @ViewChild(FormProductComponent, { static: true }) formProductComponent: FormProductComponent;

  company: any[];

  constructor(private activeModal: NgbActiveModal,
    private productService: ProductService,
    private authService: AuthService) { }

  ngOnInit() {
    this.company = this.authService.getCompany();
    console.table(this.company);
  }
  
  store(product: Product) {
    //product.company_id = this.company.id;
    this.productService.store(product).subscribe(() => {
      this.validaFormAdd();
      this.sucessoMsgComponent.setSucesso('Produto cadastrada com sucesso.');
    }, () => { this.errorMsgComponent.setErro('Falha ao cadastrar Produto.'); });
  }

  validaFormAdd() {
    this.formProductComponent.formStatus = false;
    setTimeout(() => {
      this.formProductComponent.formStatus = true;
      this.activeModal.close();
    }, 2000);
  }

}
