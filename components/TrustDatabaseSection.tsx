import React from "react";
import networkIcon2 from "@/assets/network-icon-2.jpg";
import networkEducation from "@/assets/network-education.jpg";

const TrustDatabaseSection = () => {
  const dataStats = [
    {
      number: "6 500 000",
      label: "Images radiologiques annotées",
      description: "Base d'apprentissage validée par experts",
      delay: "0.1s"
    },
    {
      number: "66 000",
      label: "Cas cliniques documentés",
      description: "Validés par des experts en radiologie",
      delay: "0.2s"
    },
    {
      number: "2 200",
      label: "Cours professionnels",
      description: "Formation continue et mise à jour",
      delay: "0.3s"
    },
    {
      number: "500+",
      label: "Modèles de CR",
      description: "Comptes-rendus et consultations types",
      delay: "0.4s"
    },
    {
      number: "500",
      label: "Radiologues utilisateurs",
      description: "Communauté active et croissante",
      delay: "0.5s"
    }
  ];

  const trustFeatures = [
    {
      icon: "🔒",
      title: "Sécurité & Confidentialité maximales",
      description: "Hébergement HDS certifié, chiffrement bout-en-bout, conformité RGPD stricte et audit de sécurité continu"
    },
    {
      icon: "🛡️", 
      title: "Label \"Garantie Humaine\"",
      description: "Contrôle humain systématique, transparence des algorithmes et validation médicale de chaque suggestion"
    },
    {
      icon: "🎯",
      title: "Précision clinique validée",
      description: "95% de précision sur cohortes multi-centriques, algorithmes entraînés sur données françaises exclusivement"
    },
    {
      icon: "👥",
      title: "Développement collaboratif",
      description: "Co-créé avec 500 radiologues utilisateurs, retours d'expérience intégrés quotidiennement"
    },
    {
      icon: "📚",
      title: "Mise à jour & Veille continue",
      description: "Base enrichie quotidiennement, veille bibliographique automatisée et intégration des dernières recommandations"
    },
    {
      icon: "🏛️",
      title: "Conformité réglementaire",
      description: "Conformité dispositif médical et respect des standards internationaux"
    }
  ];

  return (
    <section 
      className="w-full py-16 sm:py-24 bg-gradient-to-b from-pulse-950 to-pulse-900 text-white relative" 
      id="trust-database"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url(${networkEducation})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🛡️</span>
            <span>Confiance & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
            L'assistant de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] animate-pulse">confiance</span> des radiologues
          </h2>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Mata Medical Data s'appuie sur la plus grande base de données radiologiques française, 
            construite avec l'expertise de nos partenaires hospitaliers et universitaires.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {dataStats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pulse-900/60 to-pulse-800/60 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:shadow-[0_0_25px_rgba(49,185,255,0.4)] opacity-0 animate-fade-in"
              style={{ animationDelay: stat.delay }}
            >
              <div 
                className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: `url(${networkIcon2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl font-display font-bold text-pulse-400 drop-shadow-[0_0_15px_rgba(49,185,255,0.8)] mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pulse-300 transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-pulse-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>


        {/* Bottom certification with CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            {/* Certifications */}
            <div className="inline-flex items-center justify-center space-x-8 px-8 py-4 rounded-full bg-pulse-500/10 backdrop-blur-sm shadow-[0_0_25px_rgba(49,185,255,0.3)] mb-8">
              <span className="text-pulse-400 font-medium text-sm">Certifié HDS</span>
              <span className="w-1 h-1 bg-pulse-400 rounded-full"></span>
              <span className="text-pulse-400 font-medium text-sm">Conforme RGPD</span>
              <span className="w-1 h-1 bg-pulse-400 rounded-full"></span>
              <span className="text-pulse-400 font-medium text-sm">Label "Garantie Humaine"</span>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8">
              <a href="#demo" className="button-primary group inline-flex items-center justify-center">
                Découvrir Mata en toute sécurité
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustDatabaseSection;