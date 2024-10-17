import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, 
            NgIf, 
            AngularFireModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  showLogin:boolean = true;
  showSignUp:boolean = false;


  turnonLogin(): void{
    this.showLogin = true;
    this.showSignUp = false

  }
  turnonSignUp(): void{
    this.showLogin = false;
    this.showSignUp = true;
  }
}