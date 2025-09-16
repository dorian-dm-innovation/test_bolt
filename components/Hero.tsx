import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import Aurora from "./Aurora";
import radiologistHero from "@/assets/radiologist-smiling.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lottie animation disabled to prioritize radiologist imagery

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  return <section className="overflow-hidden relative bg-gradient-to-b from-pulse-950 to-pulse-900 text-white" id="hero" style={{
    padding: isMobile ? '120px 12px 80px' : '160px 20px 120px'
  }}>
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            
            
            <h1 style={{
            animationDelay: "0.3s"
          }} className="section-title sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in text-zinc-50 text-4xl mb-6 sm:mb-8">
              L'IA générative des <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.8)] animate-pulse">radiologues</span>
            </h1>
            
            {/* Une seule interface emphasis */}
            <div style={{
              animationDelay: "0.4s"
            }} className="opacity-0 animate-fade-in mb-8 sm:mb-10">
              <div className="inline-flex items-center px-5 py-3 rounded-full bg-cyan-500/20 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-sm">
                <span className="text-sm sm:text-base font-semibold">
                  ✨ Une seule interface pour tous vos usages radiologiques
                </span>
              </div>
            </div>
            
            <p style={{
            animationDelay: "0.5s"
          }} className="section-subtitle mt-0 mb-8 sm:mb-12 leading-relaxed opacity-0 animate-fade-in text-white/80 font-normal text-base sm:text-lg lg:text-xl text-left space-y-3">
              <span className="block text-white font-semibold text-lg sm:text-xl mb-4">
                Sémiologie • Rédaction de CR • 66 000 cas cliniques • 2 200 cours • Agent IA web • Anatomie
              </span>
              <span className="block text-white/90 text-base sm:text-lg">
                Label « Garantie Humaine » • Hébergement HDS certifié
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{
            animationDelay: "0.7s"
          }}>
              <a href="#details" className="button-primary group inline-flex items-center justify-center w-full sm:w-auto">
                Demander un accès
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/demo" className="button-secondary w-full sm:w-auto text-center">
                Voir la démo
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-dark-900 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
            <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-pulse-950 via-pulse-900 to-dark-900">
                <img ref={imageRef} src={radiologistHero} alt="Radiologue souriante utilisant Mata" className="w-full h-full object-cover transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>;
};
export default Hero;