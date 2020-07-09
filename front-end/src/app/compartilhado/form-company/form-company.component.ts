import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.scss']
})
export class FormCompanyComponent {
  @Input() company: Company = <Company>{};
  @Output() outputCompany: EventEmitter<Company> = new EventEmitter();

  public formStatus: boolean;

  constructor() { }

  onSubmit() {
    this.outputCompany.emit(this.company);
  }
}
