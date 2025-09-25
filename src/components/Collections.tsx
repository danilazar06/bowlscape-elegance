import { Button } from "@/components/ui/button";
import { Language } from "./LanguageSelector";
import colorfulImage from "@/assets/colorful-collection.jpg";
import whiteImage from "@/assets/white-bowls.jpg";
import woodenImage from "@/assets/wooden-bowls.jpg";

interface CollectionsProps {
  language: Language;
}

export function Collections({ language }: CollectionsProps) {
  const text = {
    es: {
      title: "Nuestras Colecciones",
      subtitle: "Descubre nuestras colecciones cuidadosamente curadas para cada estilo de vida.",
      explore: "Explorar",
      collections: [
        {
          name: "Minimalistas",
          description: "Líneas limpias y elegancia atemporal para los amantes del diseño simple.",
          image: whiteImage
        },
        {
          name: "Coloridos",
          description: "Vibrantes y llenos de vida, perfectos para añadir alegría a tu mesa.",
          image: colorfulImage
        },
        {
          name: "Naturales",
          description: "Materiales sostenibles y texturas orgánicas que conectan con la naturaleza.",
          image: woodenImage
        }
      ]
    },
    en: {
      title: "Our Collections",
      subtitle: "Discover our carefully curated collections for every lifestyle.",
      explore: "Explore",
      collections: [
        {
          name: "Minimalist",
          description: "Clean lines and timeless elegance for lovers of simple design.",
          image: whiteImage
        },
        {
          name: "Colorful",
          description: "Vibrant and full of life, perfect for adding joy to your table.",
          image: colorfulImage
        },
        {
          name: "Natural",
          description: "Sustainable materials and organic textures that connect with nature.",
          image: woodenImage
        }
      ]
    }
  };

  const t = text[language];

  return (
    <section id="collections" className="py-20 bg-neutral-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {t.collections.map((collection, index) => (
            <div key={index} className="group">
              {/* Collection Image */}
              <div className="relative overflow-hidden rounded-2xl bg-background mb-6">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Collection Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{collection.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{collection.description}</p>
                <Button variant="outline" className="font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  {t.explore}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}