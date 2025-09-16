
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300 bg-gradient-to-b from-gray-500/95 to-gray-600/95 backdrop-blur-md shadow-lg border-b border-gray-400/50"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => {
            scrollToTop();
          }}
          aria-label="Mata Medical Data"
        >
          <img 
            src="/lovable-uploads/0101af9a-a333-4a68-942e-5a3cb7b6972c.png" 
            alt="Logo Mata Medical Data" 
            className="h-10 sm:h-12 md:h-14" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link-header" onClick={() => scrollToTop()}>
            Home
          </Link>
          <a href="#made-by-humans" className="nav-link-header">Concept</a>
          <a href="#expert-committee" className="nav-link-header">Comité scientifique</a>
          <a href="#features" className="nav-link-header">Capacités</a>
          <a href="#trust-database" className="nav-link-header">Base de données</a>
          <a href="#testimonials" className="nav-link-header">Témoignages</a>
          <a href="#details" className="nav-link-header">Démonstration</a>
          <Link to="/about" className="nav-link-header">À propos</Link>
          <Link to="/demo" className="nav-link-header">Démo interactive</Link>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-200 hover:text-white p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-gradient-to-b from-gray-500 to-gray-600 text-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <Link 
            to="/" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" 
            onClick={() => {
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </Link>
          <a 
            href="#made-by-humans" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Concept
          </a>
          <a 
            href="#expert-committee" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Comité scientifique
          </a>
          <a 
            href="#features" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Capacités
          </a>
          <a 
            href="#trust-database" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Base de données
          </a>
          <a 
            href="#testimonials" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Témoignages
          </a>
          <a 
            href="#details" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Démonstration
          </a>
          <Link 
            to="/about" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            À propos
          </Link>
          <Link 
            to="/demo" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg text-gray-200 hover:text-white hover:bg-gray-400/50" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Démo interactive
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
