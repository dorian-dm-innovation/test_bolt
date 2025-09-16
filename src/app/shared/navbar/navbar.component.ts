import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class]="headerClasses">
      <div class="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a routerLink="/" class="flex items-center space-x-2" (click)="scrollToTop()" aria-label="Mata Medical Data">
          <img 
            src="/lovable-uploads/0101af9a-a333-4a68-942e-5a3cb7b6972c.png" 
            alt="Logo Mata Medical Data" 
            class="h-10 sm:h-12 md:h-14" 
          />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a routerLink="/" class="nav-link-header" (click)="scrollToTop()">Home</a>
          <a href="#made-by-humans" class="nav-link-header">Concept</a>
          <a href="#expert-committee" class="nav-link-header">Comité scientifique</a>
          <a href="#features" class="nav-link-header">Capacités</a>
          <a href="#trust-database" class="nav-link-header">Base de données</a>
          <a href="#testimonials" class="nav-link-header">Témoignages</a>
          <a href="#details" class="nav-link-header">Démonstration</a>
          <a routerLink="/about" class="nav-link-header">À propos</a>
          <a routerLink="/demo" class="nav-link-header">Démo interactive</a>
        </nav>

        <!-- Mobile menu button -->
        <button 
          class="md:hidden text-gray-200 hover:text-white p-3 focus:outline-none" 
          (click)="toggleMenu()"
          [attr.aria-label]="isMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg *ngIf="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg *ngIf="isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div [class]="mobileMenuClasses">
        <nav class="flex flex-col space-y-8 items-center mt-8">
          <a routerLink="/" class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" (click)="closeMobileMenu()">Home</a>
          <a href="#made-by-humans" class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" (click)="closeMobileMenu()">Concept</a>
          <a href="#expert-committee" class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" (click)="closeMobileMenu()">Comité scientifique</a>
          <a href="#features" class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" (click)="closeMobileMenu()">Capacités</a>
          <a href="#trust-database" class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" (click)="closeMobileMenu()">Base de données</a>
          <a href="#testimonials" class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" (click)="closeMobileMenu()">Témoignages</a>
          <a href="#details" class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" (click)="closeMobileMenu()">Démonstration</a>
          <a routerLink="/about" class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" (click)="closeMobileMenu()">À propos</a>
          <a routerLink="/demo" class="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" (click)="closeMobileMenu()">Démo interactive</a>
        </nav>
      </div>
    </header>
  `,
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMenuOpen = false;

  get headerClasses(): string {
    return `fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300 bg-gradient-to-b from-gray-500/95 to-gray-600/95 backdrop-blur-md shadow-lg border-b border-gray-400/50`;
  }

  get mobileMenuClasses(): string {
    const baseClasses = 'fixed inset-0 z-40 bg-gradient-to-b from-gray-500 to-gray-600 text-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out';
    return this.isMenuOpen 
      ? `${baseClasses} opacity-100 translate-x-0`
      : `${baseClasses} opacity-0 translate-x-full pointer-events-none`;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.closeMobileMenu();
  }
}