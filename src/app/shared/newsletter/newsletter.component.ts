import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section 
      id="newsletter" 
      class="bg-gradient-to-b from-pulse-950 to-pulse-900 text-white py-0"
      [style.background-image]="backgroundStyle">
      
      <div class="section-container opacity-0 animate-on-scroll">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-4 mb-6">
            <div class="pulse-chip">
              <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Newsletter</span>
            </div>
          </div>
          
          <h2 class="text-5xl font-display font-bold mb-4 text-left text-white">Restez informé des nouveautés</h2>
          <p class="text-xl text-white/80 mb-10 text-left">
            Recevez les mises à jour produit, contenus pédagogiques et cas sélectionnés.
          </p>
          
          <form (ngSubmit)="handleSubmit()" class="flex flex-col md:flex-row gap-4 items-start md:items-center mb-8">
            <div class="relative flex-grow">
              <input 
                type="email" 
                [(ngModel)]="email" 
                name="email"
                placeholder="Adresse e-mail" 
                class="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" 
                required />
            </div>
            <button 
              type="submit" 
              [disabled]="isSubmitting" 
              class="bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 md:ml-4">
              {{isSubmitting ? "Envoi..." : "S'inscrire"}}
            </button>
          </form>
          
          <div class="flex justify-center">
            <a href="#get-access" class="button-primary group inline-flex items-center justify-center">
              Accéder à Mata
              <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class NewsletterComponent {
  backgroundStyle = `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url('/public/background-section2.png')`;
  
  email = '';
  isSubmitting = false;

  handleSubmit() {
    if (!this.email) {
      alert("Veuillez entrer votre adresse e-mail");
      return;
    }
    
    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      alert("Merci pour votre inscription ! Vous recevrez bientôt des nouvelles de Mata.");
      this.email = '';
      this.isSubmitting = false;
    }, 1000);
  }
}