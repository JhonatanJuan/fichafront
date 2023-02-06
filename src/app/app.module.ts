import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { NgxMaskModule, IConfig, MaskDirective } from 'ngx-mask'
import { MatStepperModule } from '@angular/material/stepper';
// import { NgxLoadingModule } from "ngx-loading";

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { EstoriasComponent } from './views/estorias/estorias.component';
import { AssinaturaComponent } from './views/assinatura/assinatura.component';
import { InfoComponent } from './views/info/info.component';
import { SessoesComponent } from './views/sessoes/sessoes.component';
import { PagePagamentoComponent } from './views/assinatura/pagamento/model1-pagamento/page-pagamento/page-pagamento.component';
import { LoginComponent } from './views/login/login.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { CPFPipe } from './components/pipes/cpf.pipe';
import { PreloaderComponent } from './components/preloader/preloader.component';
// import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    EstoriasComponent,
    AssinaturaComponent,
    InfoComponent,
    SessoesComponent,
    PagePagamentoComponent,
    LoginComponent,
    CadastrarComponent,
    CPFPipe,
    PreloaderComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    MatExpansionModule,
    MatTabsModule,
    MatRippleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatStepperModule,
    NgxMaskModule.forRoot({
      showMaskTyped: false,
    }),
    // NgxLoadingModule.forRoot({
    //   fullScreenBackdrop: true
    // }), 
  ],
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaskDirective,
    multi: true
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }
