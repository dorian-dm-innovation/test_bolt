import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <footer role="contentinfo" class="w-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 text-white relative overflow-hidden">
      <!-- Silver metallic overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-200/10 via-transparent to-gray-300/15 pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,163,175,0.15),transparent_50%)] pointer-events-none"></div>
      
      <div class="container px-4 sm:px-6 lg:px-8 mx-auto py-14 md:py-20 relative">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          <!-- Brand + Newsletter -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/a03498d1-c8e9-4fd1-8060-e49932eee010.png" alt="Logo Mata Medical Data" class="h-12 w-auto filter brightness-110 contrast-110" loading="lazy" />
            </div>
            <p class="text-gray-100 leading-relaxed mb-6">
              L'assistant préféré des radiologues. Accélérez vos diagnostics tout en gardant le contrôle.
            </p>

            <form (ngSubmit)="handleSubscribe($event)" class="flex items-center gap-2 max-w-sm">
              <label for="footer-email" class="sr-only">Votre e-mail</label>
              <input 
                id="footer-email" 
                name="email" 
                type="email" 
                required 
                placeholder="Votre e-mail"
                [(ngModel)]="email"
                class="flex-1 px-4 py-3 rounded-xl bg-gray-500/30 border border-gray-400/50 text-gray-100 placeholder:text-gray-300 focus:border-gray-300 focus:ring-gray-300/20 backdrop-blur-sm focus:outline-none focus:ring-2" />
              <button 
                type="submit" 
                class="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                S'abonner
              </button>
            </form>

            <div class="flex items-center gap-4 mt-6" aria-label="Réseaux sociaux">
              <a href="#" aria-label="Twitter" class="group" target="_blank" rel="noopener noreferrer">
                <svg class="h-5 w-5 text-gray-300 group-hover:text-gray-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" class="group" target="_blank" rel="noopener noreferrer">
                <svg class="h-5 w-5 text-gray-300 group-hover:text-gray-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="group" target="_blank" rel="noopener noreferrer">
                <svg class="h-5 w-5 text-gray-300 group-hover:text-gray-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Product -->
          <nav aria-label="Produit" class="grid gap-3">
            <h3 class="text-sm uppercase tracking-wider text-gray-300 font-semibold">Produit</h3>
            <a href="#made-by-humans" class="link-class">Concept</a>
            <a href="#expert-committee" class="link-class">Comité scientifique</a>
            <a href="#features" class="link-class">Capacités</a>
            <a href="#trust-database" class="link-class">Base de données</a>
            <a href="#testimonials" class="link-class">Témoignages</a>
            <a href="#details" class="link-class">Démonstration</a>
          </nav>

          <!-- Company -->
          <nav aria-label="Société" class="grid gap-3">
            <h3 class="text-sm uppercase tracking-wider text-gray-300 font-semibold">Société</h3>
            <a routerLink="/about" class="link-class">À propos</a>
            <a routerLink="/demo" class="link-class">Démo interactive</a>
            <a href="#newsletter" class="link-class">Newsletter</a>
          </nav>

          <!-- Resources -->
          <nav aria-label="Ressources" class="grid gap-3">
            <h3 class="text-sm uppercase tracking-wider text-gray-300 font-semibold mb-0">Ressources</h3>
            <a href="#trust-database" class="link-class">Sécurité & Confiance</a>
            <a href="#partners" class="link-class">Partenaires</a>
          </nav>
        </div>

        <!-- Bottom bar -->
        <div class="mt-12 pt-8 border-t border-gray-500/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-200 text-sm">
            © {{currentYear}} Mata Medical Data. Tous droits réservés.
          </p>
          <div class="flex items-center gap-6 text-sm">
            <a href="#" class="link-class">Confidentialité</a>
            <a href="#" class="link-class">Conditions</a>
            <a href="#" class="link-class">Cookies</a>
          </div>
        </div>

        <!-- Attribution -->
        <div class="mt-6">
          <p class="text-center text-gray-300 text-xs">
            Template inspiré par <a href="https://x.com/BrettFromDJ" target="_blank" rel="noopener noreferrer" class="underline decoration-gray-300/50 hover:decoration-gray-200">DesignJoy</a> — construit avec Lovable par <a href="https://x.com/rezaul_arif" target="_blank" rel="noopener noreferrer" class="underline decoration-gray-300/50 hover:decoration-gray-200">Rezaul Arif</a>.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .link-class {
      @apply text-gray-200 hover:text-white transition-colors hover:underline;
    }
  `]
})
export class FooterComponent {
  email = '';
  currentYear = new Date().getFullYear();

  handleSubscribe(event: Event) {
    event.preventDefault();
    if (!this.email.trim()) return;
    
    // Placeholder: integrate newsletter service later
    console.log('Newsletter subscribe:', this.email);
    this.email = '';
  }
}