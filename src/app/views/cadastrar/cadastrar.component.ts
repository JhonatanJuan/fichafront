
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { ConsultaCepService } from 'src/app/components/services/consulta-cep.service';
import { of } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

 
  constructor(
    private router: Router, private appc: AppComponent,
    private http: HttpClient,
    private cepService: ConsultaCepService,
  ) { }
  

  ngOnInit(): void {
  }

  Assinatura() {
    this.router.navigate(['/assinatura']);
  }
  Login() {
    this.router.navigate(['/login']);
  }

  consultaCEP(cep: string) {
    console.log(cep);
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
    return of ({});
  }




}
