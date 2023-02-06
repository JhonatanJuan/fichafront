
import { Home } from './../../components/models/Home';
import { HomeContador, HomeCarousel, HomePlataforma, HomeEstoriasExclusivas, HomeSorteio } from './../../components/models/Home';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  objlistaHome: Home[] = [];
  objCarousel: HomeCarousel[] = [];
  objContadores: HomeContador[] = [];
  objPlataforma: HomePlataforma[] = [];
  objEstoriasExclusivas: HomeEstoriasExclusivas[] = [];
  objSorteio: HomeSorteio[] = [];

  constructor() {
    //Carousel
    const carousel = new HomeCarousel();
    carousel.imagemCarousel = '/assets/img/img2.jpeg'
    this.objCarousel.push(carousel)

    const carousel2 = new HomeCarousel();
    carousel2.imagemCarousel = '/assets/img/imagem1.jpeg'
    this.objCarousel.push(carousel2)

    //Contador
    const calc = new HomeContador();
    calc.enumFichasCriadas = '1.245.478';
    calc.enumEstoriasCriadas = '7.451';
    calc.enumSessoesAtivas = '756';
    calc.enumSorteiosRealizados = '2.578';
    this.objContadores.push(calc)

    //Plataforma
    const plat = new HomePlataforma();
    plat.tituloPlataforma = 'Todas as Histórias das Raças',
      plat.textoPlataforma = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus. Orci ac auctor augue mauris augue neque gravida in.',
      plat.imagemPlataforma = '/assets/img/img1.jpeg';
    this.objPlataforma.push(plat)

    const plat1 = new HomePlataforma();
    plat1.tituloPlataforma = 'Classes especiais do universo RPG',
      plat1.textoPlataforma = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus...',
      plat1.imagemPlataforma = '/assets/img/img2.jpeg';
    this.objPlataforma.push(plat1)

    const plat2 = new HomePlataforma();
    plat2.tituloPlataforma = 'Vantagens e Desvantagens',
      plat2.textoPlataforma = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus. Orci ac auctor augue mauris augue neque gravida in...',
      plat2.imagemPlataforma = '/assets/img/img3.jpeg';
    this.objPlataforma.push(plat2)

    //Estórias Exclusivas
    const estor = new HomeEstoriasExclusivas();
    estor.tituloEstoriasExclusivas = 'Estórias exclusivas da plataforma',
      estor.textoEstoriasExclusivas = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus. Phasellus vestibulum lorem sed risus ultricies tristique. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Faucibus pulvinar elementum integer enim neque. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Magnis dis parturient montes nascetur ridiculus mus mauris. Non tellus orci ac auctor augue mauris augue. Magnis dis parturient montes nascetur ridiculus mus mauris. Non tellus orci ac auctor augue mauris augue.'
    estor.imagemEstoriaExclusiva = '/assets/img/img4.jpeg';
    this.objEstoriasExclusivas.push(estor)

    //Sorteio
    const sort = new HomeSorteio();
    sort.nomeGanhador = 'Daniel Leandro da Silva'
    sort.textoGanhador = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus.'
    sort.imagemGanhador = '/assets/img/avatar.jpeg'

    sort.tituloProximoSorteio = 'Próximo sorteio'
    sort.textoProximoSorteio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus.2'
    sort.imagemProximoSorteio = '/assets/img/sorteio.jpeg'

    sort.tituloHistoricoSorteios = 'Histórico de Sorteios'
    sort.textoHistoricoSorteios = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Magna etiam tempor orci eu lobortis elementum. Adipiscing elit ut aliquam purus.3'
    sort.imagemHistoricoSorteios = '/assets/img/ganhador.png';
    this.objSorteio.push(sort);

  }

  ngOnInit(): void {

  }

}

