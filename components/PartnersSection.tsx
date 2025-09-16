import React from "react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Partenaire 1",
      logo: "/partners/partner-1-logo.png", // À remplacer par le développeur
      alt: "Logo Partenaire 1"
    },
    {
      name: "Partenaire 2", 
      logo: "/partners/partner-2-logo.png", // À remplacer par le développeur
      alt: "Logo Partenaire 2"
    },
    {
      name: "Partenaire 3",
      logo: "/partners/partner-3-logo.png", // À remplacer par le développeur
      alt: "Logo Partenaire 3"
    },
    {
      name: "Partenaire 4",
      logo: "/partners/partner-4-logo.png", // À remplacer par le développeur
      alt: "Logo Partenaire 4"
    },
    {
      name: "Partenaire 5",
      logo: "/partners/partner-5-logo.png", // À remplacer par le développeur
      alt: "Logo Partenaire 5"
    }
  ];

  return (
    <section 
      className="w-full py-12 sm:py-16 bg-gradient-to-b from-pulse-900 to-pulse-950 text-white relative" 
      id="partners"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url('/public/background-section2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🤝</span>
            <span>Nos partenaires</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Ils nous font <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] animate-pulse">confiance</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Mata Medical Data collabore avec des partenaires de référence pour offrir 
            la meilleure expérience possible aux professionnels de la radiologie.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 animate-on-scroll">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(49,185,255,0.3)] hover:bg-white/15"
            >
              <div className="flex items-center justify-center h-16 sm:h-20">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pulse-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 animate-on-scroll">
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-pulse-500/20 backdrop-blur-sm text-pulse-300 shadow-[0_0_20px_rgba(49,185,255,0.4)]">
            <span className="text-sm font-medium">
              Rejoignez notre écosystème de partenaires de confiance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;