import { ProductCard } from "./ProductCard";
import { Language } from "./LanguageSelector";
import blueImage from "@/assets/blue-bowls.jpg";
import whiteImage from "@/assets/white-bowls.jpg";
import orangeImage from "@/assets/orange-bowls.jpg";
import greenImage from "@/assets/green-bowl.jpg";
import woodenImage from "@/assets/wooden-bowls.jpg";

interface ProductsProps {
  language: Language;
}

export function Products({ language }: ProductsProps) {
  const text = {
    es: {
      title: "Nuestros Productos",
      subtitle: "Cada bowl está diseñado con amor y precisión, combinando funcionalidad con belleza."
    },
    en: {
      title: "Our Products",
      subtitle: "Each bowl is designed with love and precision, combining functionality with beauty."
    }
  };

  const t = text[language];

  const products = [
    {
      name: "Set Bowls Azul Océano",
      nameEn: "Ocean Blue Bowl Set",
      price: 24.99,
      originalPrice: 29.99,
      description: "Set de 2 bowls en tono azul profundo, perfectos para ensaladas y sopas.",
      descriptionEn: "Set of 2 bowls in deep blue tone, perfect for salads and soups.",
      image: blueImage,
      tags: ["Apto microondas", "Food grade", "Cerámica"],
      tagsEn: ["Microwave safe", "Food grade", "Ceramic"]
    },
    {
      name: "Bowl Blanco Minimalista",
      nameEn: "Minimalist White Bowl",
      price: 19.99,
      description: "Elegancia pura en cada comida. Diseño atemporal y versátil.",
      descriptionEn: "Pure elegance in every meal. Timeless and versatile design.",
      image: whiteImage,
      tags: ["Apto horno", "Lavavajillas", "Clásico"],
      tagsEn: ["Oven safe", "Dishwasher safe", "Classic"]
    },
    {
      name: "Bowl Naranja Vibrante",
      nameEn: "Vibrant Orange Bowl",
      price: 22.99,
      description: "Añade color y energía a tu mesa con este bowl llamativo.",
      descriptionEn: "Add color and energy to your table with this striking bowl.",
      image: orangeImage,
      tags: ["Resistente", "Colorido", "Moderno"],
      tagsEn: ["Durable", "Colorful", "Modern"]
    },
    {
      name: "Bowl Verde Natural",
      nameEn: "Natural Green Bowl",
      price: 27.99,
      description: "Inspirado en la naturaleza, con textura artesanal única.",
      descriptionEn: "Inspired by nature, with unique artisanal texture.",
      image: greenImage,
      tags: ["Hecho a mano", "Eco-friendly", "Artesanal"],
      tagsEn: ["Handmade", "Eco-friendly", "Artisanal"]
    },
    {
      name: "Set Bowls Madera",
      nameEn: "Wooden Bowl Set",
      price: 34.99,
      description: "Elegancia natural en madera sostenible, perfectos para frutas.",
      descriptionEn: "Natural elegance in sustainable wood, perfect for fruits.",
      image: woodenImage,
      tags: ["Madera natural", "Sostenible", "Único"],
      tagsEn: ["Natural wood", "Sustainable", "Unique"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              nameEn={product.nameEn}
              price={product.price}
              originalPrice={product.originalPrice}
              description={product.description}
              descriptionEn={product.descriptionEn}
              image={product.image}
              tags={product.tags}
              tagsEn={product.tagsEn}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}