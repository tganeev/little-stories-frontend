import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <h1>🛍️ Little Stories Shop</h1>
      <nav>
        <a routerLink="/">Товары</a> |
        <a routerLink="/cart">Корзина 🛒</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <p>© 2026 Little Stories. Все права защищены.</p>
    </footer>
  `,
  styles: [`
    header {
      background-color: #4a90e2;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    nav a {
      color: white;
      margin: 0 1rem;
      text-decoration: none;
    }
    nav a:hover {
      text-decoration: underline;
    }
    main {
      min-height: 80vh;
      padding: 2rem;
    }
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 1rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `]
})
export class AppComponent {}
