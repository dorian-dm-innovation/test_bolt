import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="overflow-hidden relative bg-gradient-to-b from-pulse-950 to-pulse-900 text-white" 
             id="hero" 
             [style.padding]="isMobile ? '120px 12px 80px' : '160px 20px 120px'">
      <div class="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div class="container px-4 sm:px-6 lg:px-8" #containerRef>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div class="w-full lg:w-1/2">
            <h1 class="section-title sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in text-zinc-50 text-4xl mb-6 sm:mb-8"
                style="animation-delay: 0.3s">
              L'IA générative des 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.8)] animate-pulse">radiologues</span>
            </h1>
            
            <div class="opacity-0 animate-fade-in mb-8 sm:mb-10" style="animation-delay: 0.4s">
              <div class="inline-flex items-center px-5 py-3 rounded-full bg-cyan-500/20 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-sm">
                <span class="text-sm sm:text-base font-semibold">
                  ✨ Une seule interface pour tous vos usages radiologiques
                </span>
              </div>
            </div>
            
            <p class="section-subtitle mt-0 mb-8 sm:mb-12 leading-relaxed opacity-0 animate-fade-in text-white/80 font-normal text-base sm:text-lg lg:text-xl text-left space-y-3"
               style="animation-delay: 0.5s">
              <span class="block text-white font-semibold text-lg sm:text-xl mb-4">
                Sémiologie • Rédaction de CR • 66 000 cas cliniques • 2 200 cours • Agent IA web • Anatomie
              </span>
              <span class="block text-white/90 text-base sm:text-lg">
                Label « Garantie Humaine » • Hébergement HDS certifié
              </span>
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in" 
                 style="animation-delay: 0.7s">
              <a href="#details" class="button-primary group inline-flex items-center justify-center w-full sm:w-auto">
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
          
          <div class="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div class="absolute inset-0 bg-dark-900 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
            <div class="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <div class="aspect-[16/10] w-full bg-gradient-to-br from-pulse-950 via-pulse-900 to-dark-900">
                <img #imageRef 
                     src="/assets/radiologist-smiling.jpg" 
                     alt="Radiologue souriante utilisant Mata" 
                     class="w-full h-full object-cover transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements OnInit, OnDestroy {
  isMobile = false;

  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile.bind(this));
    
    if (!this.isMobile) {
      this.setupParallax();
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkMobile.bind(this));
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  setupParallax() {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset['speed'] || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }
}