import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Award, GraduationCap, Hospital, Stethoscope } from "lucide-react";
import networkBanner1 from "@/assets/network-banner-1.jpg";
import networkIcon3 from "@/assets/network-icon-3.jpg";

interface Expert {
  name: string;
  role: string;
  institution: string;
  speciality: string;
  level: 'professor' | 'chief' | 'expert' | 'doctor';
  initials: string;
}

const ExpertCard = ({ expert, index }: { expert: Expert; index: number }) => {
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

  const getCardStyle = () => {
    switch (expert.level) {
      case 'professor':
        return {
          containerClass: "bg-gradient-to-br from-amber-500/10 via-pulse-900/50 to-pulse-950/80 ring-amber-400/30 hover:ring-amber-400/50",
          badgeClass: "bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]",
          nameClass: "text-amber-300 group-hover:text-amber-200",
          icon: <GraduationCap className="w-4 h-4" />
        };
      case 'chief':
        return {
          containerClass: "bg-gradient-to-br from-emerald-500/10 via-pulse-900/50 to-pulse-950/80 ring-emerald-400/30 hover:ring-emerald-400/50",
          badgeClass: "bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]",
          nameClass: "text-emerald-300 group-hover:text-emerald-200",
          icon: <Hospital className="w-4 h-4" />
        };
      case 'expert':
        return {
          containerClass: "bg-gradient-to-br from-violet-500/10 via-pulse-900/50 to-pulse-950/80 ring-violet-400/30 hover:ring-violet-400/50",
          badgeClass: "bg-violet-500/20 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.4)]",
          nameClass: "text-violet-300 group-hover:text-violet-200",
          icon: <Award className="w-4 h-4" />
        };
      default:
        return {
          containerClass: "bg-gradient-to-br from-pulse-500/10 via-pulse-900/50 to-pulse-950/80 ring-pulse-400/30 hover:ring-pulse-400/50",
          badgeClass: "bg-pulse-500/20 text-pulse-300 shadow-[0_0_15px_rgba(49,185,255,0.4)]",
          nameClass: "text-pulse-300 group-hover:text-pulse-200",
          icon: <Stethoscope className="w-4 h-4" />
        };
    }
  };

  const style = getCardStyle();

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(49,185,255,0.3)] opacity-0 p-6 h-full",
        style.containerClass
      )}
      style={{ animationDelay: `${0.05 * (index + 1)}s` }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url(${networkIcon3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with Avatar and Badge */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0 text-sm">
            {expert.initials}
          </div>
          
          {/* Badge */}
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm text-xs font-medium flex-shrink-0",
            style.badgeClass
          )}>
            {style.icon}
            {expert.level === 'professor' ? 'Professeur' : 
             expert.level === 'chief' ? 'Chef de Service' : 
             expert.level === 'expert' ? 'Expert' : 'Radiologue'}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-grow">
          <h4 className={cn(
            "text-lg font-display font-bold mb-2 transition-colors duration-300",
            style.nameClass
          )}>
            {expert.name}
          </h4>
          
          <p className="text-white/80 font-medium mb-2 text-sm">{expert.role}</p>
          <p className="text-white/60 text-sm mb-3">{expert.institution}</p>
          <p className="text-white/50 text-xs italic">Spécialité : {expert.speciality}</p>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const ExpertCommitteeSection = () => {
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

  const experts: Expert[] = [
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
      name: "Pr. Catherine Cytheval",
      role: "Professeur de Radiologie Expert",
      institution: "CHU de Montpellier",
      speciality: "Imagerie musculo-squelettique",
      level: "professor",
      initials: "CC"
    },
    {
      name: "Pr. Gilbert Ferretti",
      role: "Professeur de Radiologie Expert",
      institution: "CHU de Grenoble",
      speciality: "Imagerie thoracique",
      level: "professor",
      initials: "GF"
    },
    {
      name: "Pr. Julien Frandon",
      role: "Professeur de Radiologie Expert",
      institution: "Université de Nîmes",
      speciality: "Radiologie interventionnelle",
      level: "professor",
      initials: "JF"
    },
    {
      name: "Pr. Philippe Douek",
      role: "Professeur de Radiologie Expert",
      institution: "CHU de Lyon",
      speciality: "Imagerie cardiaque et vasculaire",
      level: "professor",
      initials: "PD"
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
    },
    {
      name: "Dr. Vincent Brun",
      role: "Radiologue Expert",
      institution: "Praticien hospitalier",
      speciality: "Radiologie générale",
      level: "expert",
      initials: "VB"
    },
    {
      name: "Dr. Madeleine Cavet",
      role: "Radiologue Expert",
      institution: "Praticien hospitalier",
      speciality: "Radiologie générale",
      level: "expert",
      initials: "MC"
    },
    {
      name: "Dr. Maud Fournol",
      role: "Radiologue Expert",
      institution: "Praticien hospitalier",
      speciality: "Radiologie générale",
      level: "expert",
      initials: "MF"
    }
  ];

  return (
    <section 
      className="w-full py-12 sm:py-16 bg-gradient-to-b from-pulse-950 to-pulse-900 text-white relative" 
      id="expert-committee"
      ref={sectionRef}
      style={{
        backgroundImage: `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url(${networkBanner1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 opacity-0 fade-in-element">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🎓</span>
            <span>Excellence académique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Comité d'experts et <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] animate-pulse">validation scientifique</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Mata Medical Data s'appuie sur l'expertise des plus grands professeurs de radiologie de France. 
            Notre comité scientifique garantit la justesse et la pertinence de chaque fonctionnalité.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experts.map((expert, index) => (
            <ExpertCard key={index} expert={expert} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 opacity-0 fade-in-element">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#details" className="button-primary group inline-flex items-center justify-center">
              Demander un accès
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <a href="#trust-database" className="button-secondary">
              Découvrir nos garanties
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertCommitteeSection;