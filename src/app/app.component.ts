import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen surface-ground">
      <header class="bg-primary p-3 shadow-2 text-white">
        <h1 class="m-0 text-xl">Sistema de Chamados</h1>
      </header>
      <main class="p-3">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent {}