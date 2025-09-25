import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Language } from "./LanguageSelector";

interface ProductCardProps {
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  description: string;
  descriptionEn: string;
  image: string;
  tags: string[];
  tagsEn: string[];
  language: Language;
}

export function ProductCard({ 
  name, 
  nameEn, 
  price, 
  originalPrice, 
  description, 
  descriptionEn, 
  image, 
  tags, 
  tagsEn, 
  language 
}: ProductCardProps) {
  const text = {
    es: {
      details: "Ver detalles"
    },
    en: {
      details: "View details"
    }
  };

  const t = text[language];
  const currentName = language === "es" ? name : nameEn;
  const currentDescription = language === "es" ? description : descriptionEn;
  const currentTags = language === "es" ? tags : tagsEn;

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-neutral-warm">
        <img
          src={image}
          alt={currentName}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {originalPrice && (
          <div className="absolute top-4 left-4">
            <Badge variant="destructive" className="text-xs font-medium">
              {language === "es" ? "Oferta" : "Sale"}
            </Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Name and Price */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{currentName}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">${price}</span>
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {currentTags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{currentDescription}</p>

        {/* CTA Button */}
        <Button variant="outline" className="w-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
          {t.details}
        </Button>
      </div>
    </div>
  );
}