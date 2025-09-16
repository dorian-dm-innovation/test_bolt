import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trust-database',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section 
      class="w-full py-16 sm:py-24 bg-gradient-to-b from-pulse-950 to-pulse-900 text-white relative" 
      id="trust-database"
      [style.background-image]="backgroundStyle">
      
      <div class="container px-4 sm:px-6 lg:px-8 mx-auto">
        <!-- Header -->
        <div class="text-center mb-12 sm:mb-16 animate-on-scroll">
          <div class="pulse-chip mx-auto mb-6">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🛡️</span>
            <span>Confiance & Expertise</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
            L'assistant de 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] animate-pulse">confiance</span> 
            des radiologues
          </h2>
          <p class="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Mata Medical Data s'appuie sur la plus grande base de données radiologiques française, 
            construite avec l'expertise de nos partenaires hospitaliers et universitaires.
          </p>
        </div>

        <!-- Statistics Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <div *ngFor="let stat of dataStats" 
               class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pulse-900/60 to-pulse-800/60 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:shadow-[0_0_25px_rgba(49,185,255,0.4)] opacity-0 animate-fade-in"
               [style.animation-delay]="stat.delay">
            
            <div class="absolute inset-0 opacity-10" 
                 style="background-image: url('/assets/network-icon-2.jpg'); background-size: cover; background-position: center"></div>
            
            <div class="relative z-10">
              <div class="text-4xl sm:text-5xl font-display font-bold text-pulse-400 drop-shadow-[0_0_15px_rgba(49,185,255,0.8)] mb-2">
                {{stat.number}}
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pulse-300 transition-colors duration-300">
                {{stat.label}}
              </h3>
              <p class="text-gray-300 text-sm leading-relaxed">
                {{stat.description}}
              </p>
            </div>

            <!-- Glow effect on hover -->
            <div class="absolute inset-0 bg-pulse-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <!-- Bottom certification with CTA -->
        <div class="text-center mt-16 animate-on-scroll">
          <div class="max-w-4xl mx-auto">
            <!-- Certifications -->
            <div class="inline-flex items-center justify-center space-x-8 px-8 py-4 rounded-full bg-pulse-500/10 backdrop-blur-sm shadow-[0_0_25px_rgba(49,185,255,0.3)] mb-8">
              <span class="text-pulse-400 font-medium text-sm">Certifié HDS</span>
              <span class="w-1 h-1 bg-pulse-400 rounded-full"></span>
              <span class="text-pulse-400 font-medium text-sm">Conforme RGPD</span>
              <span class="w-1 h-1 bg-pulse-400 rounded-full"></span>
              <span class="text-pulse-400 font-medium text-sm">Label "Garantie Humaine"</span>
            </div>
            
            <!-- CTA Button -->
            <div class="mt-8">
              <a href="#demo" class="button-primary group inline-flex items-center justify-center">
                Découvrir Mata en toute sécurité
                <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TrustDatabaseComponent {
  backgroundStyle = `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url('/assets/network-education.jpg')`;

  dataStats = [
    {
      number: "6 500 000",
      label: "Images radiologiques annotées",
      description: "Base d'apprentissage validée par experts",
      delay: "0.1s"
    },
    {
      number: "66 000",
      label: "Cas cliniques documentés",
      description: "Validés par des experts en radiologie",
      delay: "0.2s"
    },
    {
      number: "2 200",
      label: "Cours professionnels",
      description: "Formation continue et mise à jour",
      delay: "0.3s"
    },
    {
      number: "500+",
      label: "Modèles de CR",
      description: "Comptes-rendus et consultations types",
      delay: "0.4s"
    },
    {
      number: "500",
      label: "Radiologues utilisateurs",
      description: "Communauté active et croissante",
      delay: "0.5s"
    }
  ];
}