import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section 
      class="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-pulse-950 to-pulse-900 text-white relative" 
      id="get-access"
      [style.background-image]="backgroundStyle">
      
      <div class="section-container relative z-10 opacity-0 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto glass-card p-6 sm:p-8 md:p-10 lg:p-14 text-center overflow-hidden relative">
          <!-- Decorative circles -->
          <div class="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-pulse-100/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div class="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-pulse-100/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
          
          <div class="pulse-chip mx-auto mb-4 sm:mb-6">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🚀</span>
            <span>Accès anticipé disponible</span>
          </div>
          
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Rejoignez les premiers radiologues <br class="hidden sm:inline" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] animate-pulse">à utiliser Mata</span>
          </h2>
          
          <p class="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Nous acceptons un nombre limité de services pionniers. Demandez votre accès dès aujourd'hui pour transformer votre pratique radiologique.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#details" class="button-primary group flex items-center justify-center w-full sm:w-auto">
              Demander un accès
              <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
            <a routerLink="/demo" class="button-secondary w-full sm:w-auto text-center">
              Voir la démo
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CtaComponent {
  backgroundStyle = `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url('/public/background-section1.png')`;
}