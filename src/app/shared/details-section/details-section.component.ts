import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section 
      id="details" 
      class="w-full bg-gradient-to-b from-pulse-950 to-pulse-900 text-white py-12 sm:py-20"
      [style.background-image]="backgroundStyle">
      
      <div class="container px-4 sm:px-6 lg:px-8 mx-auto">
        <!-- Header -->
        <div class="text-center mb-8 sm:mb-12 animate-on-scroll">
          <div class="pulse-chip mx-auto mb-4">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">4</span>
            <span>Démo</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Demandez une démonstration
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-6 md:gap-8">
          <!-- Demo Request Card -->
          <div class="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant max-w-2xl mx-auto animate-on-scroll">
            <!-- Card Header -->
            <div 
              class="relative h-48 sm:h-56 p-6 sm:p-8 flex flex-col justify-center items-center text-center"
              [style.background-image]="cardHeaderStyle">
              
              <div class="inline-flex items-center justify-center px-4 py-2 rounded-full bg-pulse-400/20 backdrop-blur-sm text-pulse-300 mb-4 shadow-[0_0_15px_rgba(49,185,255,0.5)]">
                <span class="text-sm font-medium">Accès personnalisé</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-display text-white font-bold mb-2 drop-shadow-lg">
                Votre démo personnalisée
              </h3>
              <p class="text-gray-200 text-sm sm:text-base">
                Présentée par nos experts radiologues
              </p>
            </div>
            
            <!-- Card Content - Form -->
            <div class="bg-white p-6 sm:p-8">
              <form (ngSubmit)="handleSubmit()" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input 
                      type="text" 
                      name="fullName" 
                      [(ngModel)]="formData.fullName"
                      placeholder="Dr. Nom Prénom" 
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      [(ngModel)]="formData.email"
                      placeholder="email@hopital.fr" 
                      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Établissement
                  </label>
                  <input 
                    type="text" 
                    name="company" 
                    [(ngModel)]="formData.company"
                    placeholder="CHU, Clinique, Cabinet..." 
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200" 
                  />
                </div>
                
                <!-- Benefits -->
                <div class="bg-pulse-50 rounded-xl p-4 mt-6">
                  <h4 class="font-semibold text-gray-800 mb-2">Ce que vous découvrirez :</h4>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Interface d'aide à la rédaction de CR</li>
                    <li>• Base de connaissances radiologique complète</li>
                    <li>• Module d'anatomie multimodale</li>
                    <li>• Agent IA connecté au web médical</li>
                  </ul>
                </div>
                
                <div class="pt-2">
                  <button 
                    type="submit" 
                    class="w-full px-6 py-4 bg-pulse-500 hover:bg-pulse-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                    Demander ma démonstration gratuite
                  </button>
                </div>
                
                <p class="text-xs text-gray-500 text-center mt-4">
                  Démonstration de 30 minutes avec un expert radiologue • Sans engagement
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class DetailsSectionComponent {
  backgroundStyle = `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url('/assets/network-banner-2.jpg')`;
  cardHeaderStyle = `linear-gradient(rgba(12, 65, 139, 0.85), rgba(0, 25, 61, 0.9)), url('/assets/network-banner-2.jpg')`;

  formData = {
    fullName: '',
    email: '',
    company: ''
  };

  handleSubmit() {
    // Simple validation
    if (!this.formData.fullName || !this.formData.email) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Demo form submission
    alert("Demande envoyée avec succès ! Nous vous contactons sous 24h.");

    // Reset form
    this.formData = {
      fullName: '',
      email: '',
      company: ''
    };
  }
}