import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="flex flex-column min-h-screen">
      
      <header class="cni-header p-3 flex align-items-center justify-content-between">
        <div class="flex align-items-center gap-3">
          <h1 class="m-0 text-3xl font-bold italic">CNI</h1>
          <span class="opacity-70 text-sm hidden md:block border-left-1 pl-3">Confederação Nacional da Indústria</span>
        </div>
        
        <nav class="hidden md:flex gap-4 text-sm font-semibold">
          <a class="cursor-pointer hover:text-primary-300 transition-colors">Institucional</a>
          <a class="cursor-pointer hover:text-primary-300 transition-colors">Atuação</a>
          <a class="cursor-pointer hover:text-primary-300 transition-colors">Notícias</a>
        </nav>
      </header>

      <main class="flex-grow-1 p-4 md:p-6 fadein animation-duration-500">
        <div class="max-w-70rem mx-auto">
          <router-outlet></router-outlet>
        </div>
      </main>

      <footer class="cni-footer text-center md:text-left">
        <div class="max-w-70rem mx-auto flex flex-column md:flex-row justify-content-between align-items-center gap-3">
          <div>
            <p class="m-0 font-bold text-xl italic">CNI</p>
            <small class="opacity-80">Sistema de Gestão de Chamados © 2025</small>
          </div>
          <div class="flex gap-3">
             <i class="pi pi-facebook cursor-pointer text-xl"></i>
             <i class="pi pi-linkedin cursor-pointer text-xl"></i>
             <i class="pi pi-instagram cursor-pointer text-xl"></i>
          </div>
        </div>
      </footer>

    </div>
  `
})
export class AppComponent {}