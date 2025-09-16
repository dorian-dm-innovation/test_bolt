import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Veuillez entrer votre adresse e-mail",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Merci pour votre inscription !",
        description: "Vous recevrez bientôt des nouvelles de Mata.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  return <section 
    id="newsletter" 
    className="bg-gradient-to-b from-pulse-950 to-pulse-900 text-white py-0"
    style={{
      backgroundImage: `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url('/public/background-section2.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Newsletter</span>
            </div>
          </div>
          
      <h2 className="text-5xl font-display font-bold mb-4 text-left text-white">Restez informé des nouveautés</h2>
      <p className="text-xl text-white/80 mb-10 text-left">
            Recevez les mises à jour produit, contenus pédagogiques et cas sélectionnés.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-8">
            <div className="relative flex-grow">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Adresse e-mail" className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" required />
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 md:ml-4">
              {isSubmitting ? "Envoi..." : "S'inscrire"}
            </button>
          </form>
          
          <div className="flex justify-center">
            <a href="#get-access" className="button-primary group inline-flex items-center justify-center">
              Accéder à Mata
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Newsletter;