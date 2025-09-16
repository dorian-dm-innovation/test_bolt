import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "À propos | Atlas";

    const desc = "Découvrez la mission, la vision et l'équipe derrière Atlas.";
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-pulse-950 to-pulse-900 text-white">
        <section className="section-container py-20 animate-on-scroll">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-display font-bold">À propos d'Atlas</h1>
            <p className="mt-4 text-white/70 max-w-2xl">Nous concevons des systèmes intelligents et fiables qui amplifient les capacités humaines avec élégance et sécurité.</p>
          </header>

          <article className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="sr-only">Notre mission</h2>
                <p className="leading-relaxed text-white/80">Notre mission est d'apporter la robotique avancée et l'IA au service des entreprises de toutes tailles. Nous privilégions la simplicité de déploiement, la précision opérationnelle et une esthétique raffinée.</p>
              </section>
              <section>
                <h2 className="sr-only">Notre vision</h2>
                <p className="leading-relaxed text-white/80">Nous imaginons un futur où humains et machines collaborent de manière naturelle. Atlas est pensé pour s'adapter, apprendre et évoluer avec vos besoins.</p>
              </section>
            </div>
            <aside className="bg-gradient-to-br from-pulse-950 via-pulse-900 to-pulse-800 rounded-xl p-6 ring-1 ring-white/10 shadow-xl">
              <h3 className="font-semibold text-xl mb-2">En bref</h3>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li>Déploiement rapide</li>
                <li>Précision et sécurité</li>
                <li>Design élégant et cohérent</li>
              </ul>
            </aside>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
