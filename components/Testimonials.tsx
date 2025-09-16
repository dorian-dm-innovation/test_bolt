import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Je suis fier de rejoindre MATA pour mettre mon expertise au service d'une innovation qui révolutionne la radiologie.",
  author: "Pr Sébastien Aubry",
  role: "Professeur de Radiologie",
  gradient: "from-blue-600 via-indigo-700 to-purple-800",
  backgroundImage: "/lovable-uploads/c9906f76-0e7c-46c7-8904-cf5835021e12.png"
}, {
  content: "Partager le savoir est une responsabilité. Avec MATA, nous avons l'opportunité d'en faire un levier collectif, utile à tous.",
  author: "Dr Franck Lapegue",
  role: "Radiologue expert en imagerie musculo-squelettique",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/lovable-uploads/1793ab89-747f-46af-b378-6858efe12e01.png"
}, {
  content: "MATA me permet d'exercer avec davantage de sérénité. Le moteur de recherche sémiologique et les cas cliniques documentés m'aident à prendre des décisions plus sûres, plus rapidement, tout en m'appuyant sur des standards validés.",
  author: "Dr Maud Fournol",
  role: "Radiologue",
  gradient: "from-blue-800 via-indigo-900 to-purple-800",
  backgroundImage: "/lovable-uploads/2cc4a59a-5296-4bb9-b8ae-942d9b0b010b.png"
}, {
  content: "Ce que j'apprécie, c'est la simplicité. Je pose une question ou je tape un mot-clé, et MATA me donne une réponse contextualisée, structurée, directement utilisable. C'est comme avoir toute une bibliothèque au bout des doigts.",
  author: "Dr Madeleine Cavet",
  role: "Radiologue",
  gradient: "from-orange-600 via-red-700 to-pink-800",
  backgroundImage: "/lovable-uploads/8e39a199-28c4-460e-8bf6-abab623de690.png"
}, {
  content: "J'ai trouvé dans MATA un outil à la fois puissant et rassurant. L'expertise humaine reste au centre, avec un cadre éthique clair. C'est un espace de confiance au service de notre jugement clinique.",
  author: "Dr Vincent Brun",
  role: "Radiologue",
  gradient: "from-green-600 via-teal-700 to-blue-800",
  backgroundImage: "/lovable-uploads/3de7d0e0-1c8a-4bb8-81ee-1a695b75a8fd.png"
}, {
  content: "La formation des jeunes radiologues est au cœur de nos préoccupations. MATA peut devenir un outil précieux pour accompagner leur apprentissage au quotidien.",
  author: "Dr Julien Savatovsky",
  role: "Chef de service Neuroradiologie - Hôpital Fondation Rothschild",
  gradient: "from-indigo-700 via-purple-800 to-blue-900",
  backgroundImage: "/lovable-uploads/89a20cd4-05ad-420e-a84f-717ab547cf1e.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div className="rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden bg-gradient-to-br from-pulse-950 via-pulse-900 to-pulse-800 shadow-xl">
      <div className="relative z-0">
        <p className="text-xl mb-8 font-playfair font-medium leading-relaxed italic">{`"${content}"`}</p>
      </div>
      <div className="text-right">
        <h4 className="font-semibold text-pulse-400 text-lg">{author}</h4>
        <p className="text-white/80 text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section 
    className="py-12 bg-gradient-to-b from-pulse-950 to-pulse-900 text-white relative" 
    id="testimonials" 
    ref={sectionRef}
    style={{
      backgroundImage: `linear-gradient(rgba(12, 65, 139, 0.95), rgba(0, 25, 61, 0.95)), url('/public/background-section3.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  > {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
            <span>Témoignages</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Témoignages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;