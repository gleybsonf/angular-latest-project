import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  //private authFacade = inject(AuthFacade);
  private router = inject(Router);

  // Signals para o formulário e estado
  email = signal('');
  password = signal('');
  loading = signal(false);

  async onLogin() {
    this.loading.set(true);
    /* try {
      const success = await this.authFacade.login(this.email(), this.password());
      if (success) {
        this.router.navigate(['/people']);
      }
    } finally {
      this.loading.set(false);
    } */
  }
}
