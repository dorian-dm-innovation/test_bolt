import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import networkEducation from "@/assets/network-education.jpg";
import networkIcon1 from "@/assets/network-icon-1.jpg";
import networkIcon2 from "@/assets/network-icon-2.jpg";
import networkIcon3 from "@/assets/network-icon-3.jpg";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  index: number;
}
const FeatureCard = ({
  icon,
  title,
  description,
  image,
  index
}: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return <div ref={cardRef} className="group relative overflow-hidden rounded-2xl shadow-xl opacity-0 transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(49,185,255,0.4)]" style={{
    animationDelay: `${0.1 * index}s`
  }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-pulse-950/95" />
      
      {/* Content overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-pulse-950/90 via-pulse-900/60 to-pulse-950/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col min-h-[320px]">
        {/* Icon */}
        <div className="rounded-full bg-pulse-500/20 backdrop-blur-sm w-12 h-12 flex items-center justify-center text-pulse-400 mb-6 shadow-[0_0_15px_rgba(49,185,255,0.6)] flex-shrink-0">
          {icon}
        </div>
        
        {/* Title - Fixed height for alignment */}
        <div className="mb-4 flex-shrink-0" style={{
        minHeight: '60px'
      }}>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-pulse-300 group-hover:text-pulse-200 transition-all duration-300 leading-tight">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <div className="flex-grow">
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Hover overlay with neon glow */}
      <div className="absolute inset-0 z-[2] bg-pulse-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(49,185,255,0.3)]" />
    </div>;
};
const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
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
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const features = [{
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4"></path><path d="M12 8a4 4 0 1 0 4 4"></path><circle cx="12" cy="12" r="1"></circle></svg>,
    title: "Sémiologie Radiologique Interactive",
    description: "Posez vos questions en langage naturel et obtenez des réponses expertes sur signes radiologiques, diagnostics différentiels avec accès aux 66 000 cas cliniques.",
    image: networkIcon1
  }, {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 13v-1h6v1"></path><path d="M11 18.5l-.5-1 1-.5.5 1.5-1 .5-.5-1 1-.5"></path><path d="M9.5 12 9 11H4"></path></svg>,
    title: "Modèles de CR Intelligents",
    description: "500 modèles de comptes-rendus radiologiques et de consultations adaptés à votre spécialité, générés automatiquement selon votre demande.",
    image: networkIcon2
  }, {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="11" x="3" y="11" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" x2="8" y1="16" y2="16"></line><line x1="16" x2="16" y1="16" y2="16"></line></svg>,
    title: "Formation Continue Intégrée",
    description: "Accès direct aux 2 200 cours de professeurs français, corrélés automatiquement à vos questions pour une formation contextuelle.",
    image: networkIcon3
  }, {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>,
    title: "Recherche Web Médicale",
    description: "L'agent trouve automatiquement les liens web spécialisés et ressources externes pertinentes pour compléter vos recherches radiologiques.",
    image: networkIcon1
  }, {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>,
    title: "Atlas Anatomique Régional",
    description: "Navigation anatomique contextuelle avec corrélations multi-modalités intégrée directement dans vos conversations avec l'agent.",
    image: networkIcon2
  }, {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 6H3v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2"></path><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"></path><line x1="12" x2="12" y1="11" y2="15"></line><line x1="10" x2="14" y1="13" y2="13"></line></svg>,
    title: "Interface Conversationnelle Unifiée",
    description: "Tout en une seule conversation : posez une question et obtenez cas cliniques, cours, modèles de CR, anatomie et liens web simultanément.",
    image: networkIcon3
  }];
  return <section className="py-16 sm:py-24 relative bg-gradient-to-b from-pulse-950 to-pulse-900 text-white" id="features" ref={sectionRef} style={{
    backgroundImage: `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url(${networkEducation})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12 animate-on-scroll opacity-0 fade-in-element">
          <div className="flex items-center gap-4">
            
          </div>
          <div className="flex-1 h-[1px] bg-gray-300/30"></div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 opacity-0 fade-in-element drop-shadow-lg">
            Un seul agent conversationnel pour toute la <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.7)] animate-pulse">radiologie</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed opacity-0 fade-in-element">
            Posez vos questions et obtenez instantanément : réponses expertes, cas cliniques, cours professionnels, 
            modèles de CR, anatomie régionale et liens web. Tout en une seule interface.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} image={feature.image} index={index} />)}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 opacity-0 fade-in-element">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Une solution complète pour toute votre pratique
            </h3>
            <p className="text-gray-200 mb-8 text-lg">
              Découvrez comment Mata peut transformer votre workflow quotidien avec une démonstration personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a href="#details" className="button-primary group w-full sm:w-auto">
                Essayer maintenant
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
              <a href="/demo" className="button-secondary w-full sm:w-auto">
                Voir la démo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;