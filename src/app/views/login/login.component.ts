import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;

  constructor(private router: Router,private appc: AppComponent,) { }

  ngOnInit(): void {
  }
  cadastrar() {
    this.router.navigate(['/cadastrar']);
  }
  dash() {
    this.router.navigate(['/']);
  }

}
