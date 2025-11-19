import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ErroMsgComponent } from "../../../compartilhado/erro-msg/erro-msg.component";

import { Store } from "src/app/models/store";
import { AddProductComponent } from "../add-product/add-product.component";
import { EditProductComponent } from "../edit-product/edit-product.component";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/product";


@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.scss"],
})
export class ListProductComponent implements OnInit {
  @ViewChild(ErroMsgComponent, { static: true })
  erroMsgComponent: ErroMsgComponent;

  public products: Product[];
  public productSelected: Product;

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  openModalAddProduct() {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.result.then(() => {
      this.getProducts();
    });
  }

  openModalEditProduct() {
    const modalRef = this.modalService.open(EditProductComponent);
    modalRef.componentInstance.product = this.productSelected;
  }

  getProducts() {
    this.productService.index().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (err) => {
        console.log(err);
        this.erroMsgComponent.setErro("Falha ao buscar Produtos.");
      }
    );
  }

  delete() {
    this.productService.delete(this.productSelected.id).subscribe(
      () => {
        this.getProducts();
        this.productSelected.id = 0;
      },
      () => {
        this.erroMsgComponent.setErro("Falha ao deletar Produtos.");
      }
    );
  }
}
