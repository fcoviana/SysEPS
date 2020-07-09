import { Component } from '@angular/core';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.scss']
})
export class ErroMsgComponent {

  constructor() { }

  public erro: string;
  display = 'none';

  setErro(erro: string, tempo: number = 5000) {
    this.erro = erro;
    this.mudarDisplay();
    setTimeout(() => {
      this.erro = null;
      this.mudarDisplay();
    }, tempo);
  }

  mudarDisplay() {
    this.display === 'none' ? this.display = '' : this.display = 'none';
  }

}
