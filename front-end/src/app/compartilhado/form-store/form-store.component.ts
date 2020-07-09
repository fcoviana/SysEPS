import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.scss']
})
export class FormStoreComponent {
  @Input() store: Store = <Store>{};
  @Output() outputStore: EventEmitter<Store> = new EventEmitter();

  public formStatus: boolean;

  constructor() { }

  onSubmit() {
    this.outputStore.emit(this.store);
  }
}
