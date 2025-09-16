import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const BenefitCard = ({ number, title, description, icon, index }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 ring-1 ring-pulse-400/20 hover:ring-pulse-400/40 opacity-0 transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(49,185,255,0.3)]"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pulse-950/80 via-pulse-900/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Number */}
        <div className="flex items-center mb-6">
          <div className="rounded-full bg-pulse-500/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center text-pulse-400 shadow-[0_0_20px_rgba(49,185,255,0.4)] mr-4">
            {icon}
          </div>
          <div className="text-6xl font-bold text-pulse-400/20 group-hover:text-pulse-400/30 transition-colors duration-300">
            {number}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-pulse-300 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-pulse-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      number: "40%",
      title: "Gain de Temps sur la Rédaction",
      description: "Réduction significative du temps de rédaction des comptes-rendus grâce aux modèles intelligents et à l'assistance automatisée.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    },
    {
      number: "66K",
      title: "Cas Cliniques Validés",
      description: "Accès instantané à une base de données exhaustive de cas cliniques validés par des experts pour soutenir vos diagnostics.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
    },
    {
      number: "2.2K",
      title: "Cours de Référence",
      description: "Formation continue intégrée avec accès direct aux cours des professeurs français les plus réputés de la discipline.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    },
    {
      number: "100%",
      title: "Conformité HDS",
      description: "Hébergement certifié Hébergeur de Données de Santé avec respect total de la confidentialité et de la sécurité des données patients.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M9 12l2 2 4-4"></path></svg>
    }
  ];
  
  return (
    <section 
      className="py-16 sm:py-24 relative bg-gradient-to-b from-pulse-900 to-pulse-950 text-white" 
      id="benefits" 
      ref={sectionRef}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12 opacity-0 fade-in-element">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Impact</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300/30"></div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 opacity-0 fade-in-element drop-shadow-lg">
            Des résultats <span className="text-pulse-400 drop-shadow-[0_0_15px_rgba(49,185,255,0.7)]">mesurables</span> dès le premier jour
          </h2>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed opacity-0 fade-in-element">
            Mata transforme concrètement votre pratique avec des bénéfices quantifiés et une base de connaissances sans équivalent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              number={benefit.number}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 opacity-0 fade-in-element">
          <div className="bg-gradient-to-r from-pulse-900/50 to-pulse-800/50 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-pulse-400/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Prêt à découvrir <span className="text-pulse-400">Mata Medical Data</span> ?
            </h3>
            <p className="text-gray-200 mb-6">
              Rejoignez les 500+ radiologues qui font déjà confiance à notre expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#details" className="button-primary group inline-flex items-center justify-center">
                Demander une démo
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              <a href="#expert-committee" className="button-secondary">
                Voir nos experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;