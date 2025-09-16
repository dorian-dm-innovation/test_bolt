import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen bg-gradient-to-b from-pulse-950 to-pulse-900 text-white">
      <section class="section-container py-20 animate-on-scroll">
        <header class="mb-10">
          <h1 class="text-4xl md:text-5xl font-display font-bold">Demander une démo</h1>
          <p class="mt-4 text-white/70 max-w-2xl">
            Découvrez Mata en action et voyez comment il peut s'intégrer à vos processus avec élégance et efficacité.
          </p>
        </header>

        <article class="bg-gradient-to-br from-pulse-950 via-pulse-900 to-pulse-800 rounded-xl p-8 ring-1 ring-white/10 shadow-xl max-w-2xl">
          <p class="text-white/80 mb-6">
            Partagez vos besoins et contraintes ; notre équipe préparera une démonstration adaptée à votre contexte médical.
          </p>
          <div class="flex items-center gap-4">
            <button 
              (click)="handleDemo()" 
              class="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Planifier ma démo
            </button>
            <a routerLink="/" class="text-pulse-500 hover:text-pulse-700 underline">
              Retour à l'accueil
            </a>
          </div>
        </article>
      </section>
    </main>
    <app-footer></app-footer>
  `,
  styles: []
})
export class DemoComponent implements OnInit {
  ngOnInit() {
    document.title = "Demander une démo | Mata Medical Data";

    const desc = "Planifiez une démo personnalisée de Mata Medical Data pour votre équipe.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }

  handleDemo() {
    // Placeholder action - could open a contact modal or external form
    alert("Merci ! Nous vous contacterons rapidement pour planifier une démo.");
  }
}