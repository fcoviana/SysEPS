import { Component } from '@angular/core';

@Component({
  selector: 'app-sucesso-msg',
  templateUrl: './sucesso-msg.component.html',
  styleUrls: ['./sucesso-msg.component.scss']
})
export class SucessoMsgComponent {

  constructor() { }

  public sucesso: string;
  display = 'none';

  setSucesso(sucesso: string, tempo: number = 5000) {
    this.sucesso = sucesso;
    this.mudarDisplay();
    setTimeout(() => {
      this.sucesso = null;
      this.mudarDisplay();
    }, tempo);
  }

  mudarDisplay() {
    this.display === 'none' ? this.display = '' : this.display = 'none';
  }

}
