import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent {
  @Input() product: Product = <Product>{};
  @Output() outputProduct: EventEmitter<Product> = new EventEmitter();

  public formStatus: boolean;

  constructor() { }

  onSubmit() {
    this.outputProduct.emit(this.product);
  }
}
