import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Expert {
  name: string;
  role: string;
  institution: string;
  speciality: string;
  level: 'professor' | 'chief' | 'expert' | 'doctor';
  initials: string;
}

@Component({
  selector: 'app-expert-committee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section 
      class="w-full py-12 sm:py-16 bg-gradient-to-b from-pulse-950 to-pulse-900 text-white relative" 
      id="expert-committee"
      #sectionRef
      [style.background-image]="backgroundStyle">
      
      <div class="container px-4 sm:px-6 lg:px-8 mx-auto">
        <!-- Header -->
        <div class="text-center mb-8 sm:mb-12 opacity-0 fade-in-element">
          <div class="pulse-chip mx-auto mb-6">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🎓</span>
            <span>Excellence académique</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Comité d'experts et 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] animate-pulse">validation scientifique</span>
          </h2>
          <p class="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Mata Medical Data s'appuie sur l'expertise des plus grands professeurs de radiologie de France. 
            Notre comité scientifique garantit la justesse et la pertinence de chaque fonctionnalité.
          </p>
        </div>

        <!-- Experts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div *ngFor="let expert of experts; let i = index" 
               [class]="getCardClasses(expert)"
               [style.animation-delay]="(0.05 * (i + 1)) + 's'">
            
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-5" 
                 style="background-image: url('/assets/network-icon-3.jpg'); background-size: cover; background-position: center"></div>
            
            <div class="relative z-10 h-full flex flex-col">
              <!-- Header with Avatar and Badge -->
              <div class="flex items-start gap-4 mb-4">
                <!-- Avatar -->
                <div class="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0 text-sm">
                  {{expert.initials}}
                </div>
                
                <!-- Badge -->
                <div [class]="getBadgeClasses(expert)">
                  <div [innerHTML]="getIcon(expert)"></div>
                  {{getLevelText(expert.level)}}
                </div>
              </div>
              
              <!-- Content -->
              <div class="flex-grow">
                <h4 [class]="getNameClasses(expert)">
                  {{expert.name}}
                </h4>
                
                <p class="text-white/80 font-medium mb-2 text-sm">{{expert.role}}</p>
                <p class="text-white/60 text-sm mb-3">{{expert.institution}}</p>
                <p class="text-white/50 text-xs italic">Spécialité : {{expert.speciality}}</p>
              </div>
            </div>

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-8 opacity-0 fade-in-element">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#details" class="button-primary group inline-flex items-center justify-center">
              Demander un accès
              <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <a href="#trust-database" class="button-secondary">
              Découvrir nos garanties
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExpertCommitteeComponent implements OnInit {
  @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef;

  backgroundStyle = `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url('/assets/network-banner-1.jpg')`;

  experts: Expert[] = [
    {
      name: "Pr. Nicolas Sans",
      role: "PU-PH de Radiologie Expert",
      institution: "CHU de Toulouse",
      speciality: "Imagerie musculo-squelettique",
      level: "professor",
      initials: "NS"
    },
    {
      name: "Pr. Sébastien Aubry",
      role: "Professeur de Radiologie Expert",
      institution: "Université de Franche-Comté",
      speciality: "Imagerie musculo-squelettique",
      level: "professor",
      initials: "SA"
    },
    {
      name: "Pr. Ingrid Millet",
      role: "PU-PH de Radiologie Expert",
      institution: "Hôpital Lapeyronie, Montpellier",
      speciality: "Imagerie des urgences",
      level: "professor",
      initials: "IM"
    },
    {
      name: "Dr. Marc Zins",
      role: "Chef de Service de Radiologie Expert",
      institution: "Hôpital Saint-Joseph de Paris",
      speciality: "Radiologie abdominale",
      level: "chief",
      initials: "MZ"
    },
    {
      name: "Dr. Julien Savatovsky",
      role: "Chef de Service Expert",
      institution: "Hôpital Fondation Rothschild",
      speciality: "Neuroradiologie",
      level: "chief",
      initials: "JS"
    },
    {
      name: "Dr. Franck Lapegue",
      role: "Radiologue Expert",
      institution: "Expert en imagerie musculo-squelettique",
      speciality: "Imagerie MSK avancée",
      level: "expert",
      initials: "FL"
    }
  ];

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  getCardClasses(expert: Expert): string {
    const baseClasses = "group relative overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(49,185,255,0.3)] opacity-0 p-6 h-full";
    
    switch (expert.level) {
      case 'professor':
        return `${baseClasses} bg-gradient-to-br from-amber-500/10 via-pulse-900/50 to-pulse-950/80 ring-1 ring-amber-400/30 hover:ring-amber-400/50`;
      case 'chief':
        return `${baseClasses} bg-gradient-to-br from-emerald-500/10 via-pulse-900/50 to-pulse-950/80 ring-1 ring-emerald-400/30 hover:ring-emerald-400/50`;
      case 'expert':
        return `${baseClasses} bg-gradient-to-br from-violet-500/10 via-pulse-900/50 to-pulse-950/80 ring-1 ring-violet-400/30 hover:ring-violet-400/50`;
      default:
        return `${baseClasses} bg-gradient-to-br from-pulse-500/10 via-pulse-900/50 to-pulse-950/80 ring-1 ring-pulse-400/30 hover:ring-pulse-400/50`;
    }
  }

  getBadgeClasses(expert: Expert): string {
    const baseClasses = "inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm text-xs font-medium flex-shrink-0";
    
    switch (expert.level) {
      case 'professor':
        return `${baseClasses} bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]`;
      case 'chief':
        return `${baseClasses} bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]`;
      case 'expert':
        return `${baseClasses} bg-violet-500/20 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.4)]`;
      default:
        return `${baseClasses} bg-pulse-500/20 text-pulse-300 shadow-[0_0_15px_rgba(49,185,255,0.4)]`;
    }
  }

  getNameClasses(expert: Expert): string {
    const baseClasses = "text-lg font-display font-bold mb-2 transition-colors duration-300";
    
    switch (expert.level) {
      case 'professor':
        return `${baseClasses} text-amber-300 group-hover:text-amber-200`;
      case 'chief':
        return `${baseClasses} text-emerald-300 group-hover:text-emerald-200`;
      case 'expert':
        return `${baseClasses} text-violet-300 group-hover:text-violet-200`;
      default:
        return `${baseClasses} text-pulse-300 group-hover:text-pulse-200`;
    }
  }

  getIcon(expert: Expert): string {
    switch (expert.level) {
      case 'professor':
        return '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>';
      case 'chief':
        return '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>';
      case 'expert':
        return '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>';
      default:
        return '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>';
    }
  }

  getLevelText(level: string): string {
    switch (level) {
      case 'professor': return 'Professeur';
      case 'chief': return 'Chef de Service';
      case 'expert': return 'Expert';
      default: return 'Radiologue';
    }
  }

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (this.sectionRef?.nativeElement) {
      observer.observe(this.sectionRef.nativeElement);
    }
  }
}