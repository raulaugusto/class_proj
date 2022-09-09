import { Component } from '@angular/core';
import { Dados } from './modules/dados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class_proj';

  dados: Dados = new Dados();

  increase(){
    this.dados.numero++;
  }
}
