import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen bg-gradient-to-b from-pulse-950 to-pulse-900 text-white">
      <section class="section-container py-20 animate-on-scroll">
        <header class="mb-10">
          <h1 class="text-4xl md:text-5xl font-display font-bold">À propos de Mata</h1>
          <p class="mt-4 text-white/70 max-w-2xl">
            Nous concevons des systèmes intelligents et fiables qui amplifient les capacités humaines avec élégance et sécurité.
          </p>
        </header>

        <article class="grid gap-8 md:grid-cols-3">
          <div class="md:col-span-2 space-y-6">
            <section>
              <h2 class="sr-only">Notre mission</h2>
              <p class="leading-relaxed text-white/80">
                Notre mission est d'apporter la radiologie avancée et l'IA au service des professionnels de santé de toutes tailles. 
                Nous privilégions la simplicité de déploiement, la précision diagnostique et une esthétique raffinée.
              </p>
            </section>
            <section>
              <h2 class="sr-only">Notre vision</h2>
              <p class="leading-relaxed text-white/80">
                Nous imaginons un futur où humains et machines collaborent de manière naturelle. 
                Mata est pensé pour s'adapter, apprendre et évoluer avec vos besoins médicaux.
              </p>
            </section>
          </div>
          <aside class="bg-gradient-to-br from-pulse-950 via-pulse-900 to-pulse-800 rounded-xl p-6 ring-1 ring-white/10 shadow-xl">
            <h3 class="font-semibold text-xl mb-2">En bref</h3>
            <ul class="list-disc list-inside text-white/80 space-y-1">
              <li>Déploiement rapide</li>
              <li>Précision et sécurité</li>
              <li>Design élégant et cohérent</li>
              <li>Expertise médicale validée</li>
            </ul>
          </aside>
        </article>
      </section>
    </main>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    document.title = "À propos | Mata Medical Data";

    const desc = "Découvrez la mission, la vision et l'équipe derrière Mata Medical Data.";
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
}