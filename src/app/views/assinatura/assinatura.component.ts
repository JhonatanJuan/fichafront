import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PagePagamentoComponent } from './pagamento/model1-pagamento/page-pagamento/page-pagamento.component';

@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.component.html',
  styleUrls: ['./assinatura.component.css']
})
export class AssinaturaComponent implements OnInit {
  panelOpenState = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openPagamento(): void {
    const dialogRef = this.dialog.open(PagePagamentoComponent, {
      width: '800px',
      height: '560px',
    });
  }


}
