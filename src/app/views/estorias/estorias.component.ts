import { Component, OnInit } from '@angular/core';
import { Estorias } from './../../components/models/Estorias';

@Component({
  selector: 'app-estorias',
  templateUrl: './estorias.component.html',
  styleUrls: ['./estorias.component.css']
})

export class EstoriasComponent implements OnInit {
  listaEstorias: Estorias[] = [];

  constructor() {
    const item = new Estorias();
    item.nameUsuarioCriador = 'Dudu Magaiver';
    item.tituloEstorias = 'Estórias do Dudu'
    item.textoEstorias = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus. Orci ac auctor augue mauris augue neque gravida in. 1'
    item.imagemEstorias = '/assets/img/img1.jpeg'
    this.listaEstorias.push(item);

    const item1 = new Estorias();
    item1.nameUsuarioCriador = 'JhoJho Obichão da Goiabada';
    item1.tituloEstorias = 'Estória do JhoJho'
    item1.textoEstorias = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus. Orci ac auctor augue mauris augue neque gravida in. 1'
    item1.imagemEstorias = '/assets/img/img2.jpeg'
    this.listaEstorias.push(item1);

    const item2 = new Estorias();
    item2.nameUsuarioCriador = 'Eduardo Dudu3';
    item2.tituloEstorias = 'Estória de como ficamos Rico Pt.1'
    item2.textoEstorias = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus. Orci ac auctor augue mauris augue neque gravida in. 1'
    item2.imagemEstorias = '/assets/img/img3.jpeg'
    this.listaEstorias.push(item2);

    const item3 = new Estorias();    
    item3.nameUsuarioCriador = 'Eduardo Dudu4';
    item3.tituloEstorias = 'Lorem ipsum dolor sit amet 3'
    item3.textoEstorias = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus. Orci ac auctor augue mauris augue neque gravida in. 1'
    item3.imagemEstorias = '/assets/img/info.jpeg'
    this.listaEstorias.push(item3);

    const item5 = new Estorias();
    item5.nameUsuarioCriador = 'Eduardo Dudu1';
    item5.tituloEstorias = 'Lorem ipsum dolor sit amet 1'
    item5.textoEstorias = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus. Orci ac auctor augue mauris augue neque gravida in. 1'
    item5.imagemEstorias = '/assets/img/img1.jpeg'
    this.listaEstorias.push(item5);

    const item6 = new Estorias();
    item6.nameUsuarioCriador = 'Eduardo Dudu2';
    item6.tituloEstorias = 'Lorem ipsum dolor sit amet 2'
    item6.textoEstorias = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus. Orci ac auctor augue mauris augue neque gravida in. 1'
    item6.imagemEstorias = '/assets/img/img2.jpeg'
    this.listaEstorias.push(item6);    
    
   }

  ngOnInit() {
    // this.http.get<ListaEstorias[]>('http://localhost:3001/listaEstorias/').subscribe(data => {
    //   this.listaEstorias = data;
    // });

  }

}
