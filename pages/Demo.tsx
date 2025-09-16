import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Demo = () => {
  useEffect(() => {
    document.title = "Demander une démo | Atlas";

    const desc = "Planifiez une démo personnalisée d'Atlas pour votre équipe.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description",);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, []);

  const handleDemo = () => {
    // Placeholder action - could open a contact modal or external form
    alert("Merci ! Nous vous contacterons rapidement pour planifier une démo.");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-pulse-950 to-pulse-900 text-white">
        <section className="section-container py-20 animate-on-scroll">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-display font-bold">Demander une démo</h1>
            <p className="mt-4 text-white/70 max-w-2xl">Découvrez Atlas en action et voyez comment il peut s'intégrer à vos processus avec élégance et efficacité.</p>
          </header>

          <article className="bg-gradient-to-br from-pulse-950 via-pulse-900 to-pulse-800 rounded-xl p-8 ring-1 ring-white/10 shadow-xl max-w-2xl">
            <p className="text-white/80 mb-6">Partagez vos besoins et contraintes ; notre équipe préparera une démonstration adaptée à votre contexte.</p>
            <div className="flex items-center gap-4">
              <Button size="lg" onClick={handleDemo}>Planifier ma démo</Button>
              <a href="/" className="text-pulse-500 hover:text-pulse-700 underline">Retour à l'accueil</a>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Demo;
