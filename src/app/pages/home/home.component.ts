import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, FooterComponent],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      <main class="space-y-4 sm:space-y-8">
        <app-hero></app-hero>
        
        <!-- Placeholder sections - to be implemented -->
        <section class="py-16 bg-gradient-to-b from-pulse-950 to-pulse-900 text-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8">Fonctionnalités</h2>
            <p class="text-center text-gray-300">Les autres sections seront implémentées progressivement...</p>
          </div>
        </section>
        
        <section class="py-16 bg-gradient-to-b from-pulse-900 to-pulse-950 text-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8">Comité d'experts</h2>
            <p class="text-center text-gray-300">Section en cours de développement...</p>
          </div>
        </section>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    setTimeout(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    // Setup smooth scrolling for anchor links
    this.setupSmoothScrolling();
  }

  private setupSmoothScrolling() {
    setTimeout(() => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href')?.substring(1);
          if (!targetId) return;
          
          const targetElement = document.getElementById(targetId);
          if (!targetElement) return;
          
          const offset = window.innerWidth < 768 ? 100 : 80;
          
          window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
          });
        });
      });
    }, 100);
  }
}