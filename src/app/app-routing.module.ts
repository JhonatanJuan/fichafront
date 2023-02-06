
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { EstoriasComponent } from './views/estorias/estorias.component';
import { InfoComponent } from './views/info/info.component';
import { SessoesComponent } from './views/sessoes/sessoes.component';
import { AssinaturaComponent } from './views/assinatura/assinatura.component';
import { LoginComponent } from './views/login/login.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cadastrar", component: CadastrarComponent },

  { path: "sobre", component: SobreComponent },
  { path: "estorias", component: EstoriasComponent },
  { path: "info", component: InfoComponent },
  { path: "sessoes", component: SessoesComponent },
  { path: "assinatura", component: AssinaturaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
