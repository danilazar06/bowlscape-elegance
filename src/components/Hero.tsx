import { Button } from "@/components/ui/button";
import { Language } from "./LanguageSelector";
import heroImage from "@/assets/hero-bowl.jpg";

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const text = {
    es: {
      title: "Bowl Collection",
      description: "Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.",
      cta: "Explorar Colección"
    },
    en: {
      title: "Bowl Collection",
      description: "Explore our collection of bowls that combines style and practicality, perfect for any table.",
      cta: "Explore Collection"
    }
  };

  const t = text[language];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-neutral-warm pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                {t.title}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                {t.description}
              </p>
            </div>
            <div>
              <Button size="lg" className="text-lg px-8 py-6 font-medium hover:shadow-lg transition-all duration-300">
                {t.cta}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-soft rounded-3xl blur-3xl transform rotate-6"></div>
              <img
                src={heroImage}
                alt="Beautiful ceramic bowl"
                className="relative w-full max-w-lg h-auto object-cover rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}