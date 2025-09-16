import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FeaturesComponent } from '../../shared/features/features.component';
import { ExpertCommitteeComponent } from '../../shared/expert-committee/expert-committee.component';
import { TrustDatabaseComponent } from '../../shared/trust-database/trust-database.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';
import { CtaComponent } from '../../shared/cta/cta.component';
import { DetailsSectionComponent } from '../../shared/details-section/details-section.component';
import { NewsletterComponent } from '../../shared/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    HeroComponent, 
    FooterComponent,
    FeaturesComponent,
    ExpertCommitteeComponent,
    TrustDatabaseComponent,
    TestimonialsComponent,
    CtaComponent,
    DetailsSectionComponent,
    NewsletterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-navbar></app-navbar>
      <main class="space-y-4 sm:space-y-8">
        <app-hero></app-hero>
        <app-features></app-features>
        <app-expert-committee></app-expert-committee>
        <app-trust-database></app-trust-database>
        <app-testimonials></app-testimonials>
        <app-cta></app-cta>
        <app-details-section></app-details-section>
        <app-newsletter></app-newsletter>
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