import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecaptchaComponent } from 'ng-recaptcha';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-page-pagamento',
  templateUrl: './page-pagamento.component.html',
  styleUrls: ['./page-pagamento.component.css']
})

export class PagePagamentoComponent implements OnInit {
  @ViewChild('recaptcha') recaptcha: RecaptchaComponent;
  
  maskCartao = new FormGroup({
    numberCartao: new FormControl(''),
    mesAno: new FormControl(''),
    codeCvc: new FormControl(''),
  })

  token: string;
  
  mostrarPix: boolean = false;
  mostrarCartao: boolean = false;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeModalPagamento(): void {
    const dialogRef = this.dialog.closeAll();
  }
  onMostrarPix() {
    this.mostrarPix = !this.mostrarPix
    if (this.mostrarPix = true) {
      this.mostrarCartao = false
    }
  }
  onMostrarCartao() {
    this.mostrarCartao = !this.mostrarCartao
    if (this.mostrarCartao = true) {
      this.mostrarPix = false;
    }
  }

  resolved(captchaResponse: string) {
    this.token = captchaResponse;
  }

  onSubmit(): void {
    console.log(this.maskCartao.value);
    // ENVIAR PARA API
    // const token = this.recaptcha.getResponse();
  }

}
