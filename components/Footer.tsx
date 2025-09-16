import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    if (!email) return;
    // Placeholder: integrate newsletter service later
    console.log("Newsletter subscribe:", email);
    form.reset();
  };

  const linkClass = "text-gray-200 hover:text-white transition-colors hover:underline";

  return (
    <footer role="contentinfo" className="w-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 text-white relative overflow-hidden">
      {/* Silver metallic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200/10 via-transparent to-gray-300/15 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,163,175,0.15),transparent_50%)] pointer-events-none"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-14 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand + Newsletter */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/a03498d1-c8e9-4fd1-8060-e49932eee010.png" alt="Logo Mata Medical Data" className="h-12 w-auto filter brightness-110 contrast-110" loading="lazy" />
            </div>
            <p className="text-gray-100 leading-relaxed mb-6">
              L'assistant préféré des radiologues. Accélérez vos diagnostics tout en gardant le contrôle.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
              <label htmlFor="footer-email" className="sr-only">
                Votre e-mail
              </label>
              <Input id="footer-email" name="email" type="email" required placeholder="Votre e-mail"
                className="bg-gray-500/30 border-gray-400/50 text-gray-100 placeholder:text-gray-300 focus:border-gray-300 focus:ring-gray-300/20 backdrop-blur-sm" />
              <Button type="submit" variant="default" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl transition-all">
                S'abonner
              </Button>
            </form>

            <div className="flex items-center gap-4 mt-6" aria-label="Réseaux sociaux">
              <a href="#" aria-label="Twitter" className="group" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-gray-300 group-hover:text-gray-100 transition-colors" />
              </a>
              <a href="#" aria-label="GitHub" className="group" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-300 group-hover:text-gray-100 transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn" className="group" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-gray-100 transition-colors" />
              </a>
            </div>
          </div>

          {/* Product */}
          <nav aria-label="Produit" className="grid gap-3">
            <h3 className="text-sm uppercase tracking-wider text-gray-300 font-semibold">Produit</h3>
            <a href="#made-by-humans" className={linkClass}>Concept</a>
            <a href="#expert-committee" className={linkClass}>Comité scientifique</a>
            <a href="#features" className={linkClass}>Capacités</a>
            <a href="#trust-database" className={linkClass}>Base de données</a>
            <a href="#testimonials" className={linkClass}>Témoignages</a>
            <a href="#details" className={linkClass}>Démonstration</a>
          </nav>

          {/* Company */}
          <nav aria-label="Société" className="grid gap-3">
            <h3 className="text-sm uppercase tracking-wider text-gray-300 font-semibold">Société</h3>
            <a href="/about" className={linkClass}>À propos</a>
            <a href="/demo" className={linkClass}>Démo interactive</a>
            <a href="#newsletter" className={linkClass}>Newsletter</a>
          </nav>

          {/* Resources */}
          <nav aria-label="Ressources" className="grid gap-3">
            <h3 className="text-sm uppercase tracking-wider text-gray-300 font-semibold mb-0">Ressources</h3>
            <a href="#trust-database" className={linkClass}>Sécurité & Confiance</a>
            <a href="#partners" className={linkClass}>Partenaires</a>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-500/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} Mata Medical Data. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className={linkClass}>Confidentialité</a>
            <a href="#" className={linkClass}>Conditions</a>
            <a href="#" className={linkClass}>Cookies</a>
          </div>
        </div>

        {/* Attribution (conserve l'info d'origine) */}
        <div className="mt-6">
          <p className="text-center text-gray-300 text-xs">
            Template inspiré par <a href="https://x.com/BrettFromDJ" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-300/50 hover:decoration-gray-200">DesignJoy</a> — construit avec Lovable par <a href="https://x.com/rezaul_arif" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-300/50 hover:decoration-gray-200">Rezaul Arif</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;