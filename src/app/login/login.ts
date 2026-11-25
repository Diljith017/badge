import { Component, inject } from '@angular/core';
import { Authservice } from '../authservice';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';
  errormessage = '';

  private authservice = inject(Authservice);
  private router = inject(Router);

  login() {

    const success = this.authservice.login(
      this.username,
      this.password
    );

    if (success) {
      this.router.navigate(['/home']);
    } else {
      this.errormessage = 'Invalid username or password';
    }
  }
}