import { Language } from "./LanguageSelector";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const text = {
    es: {
      company: "Bowl Collection",
      tagline: "Elegancia en cada comida",
      contact: "Contacto",
      email: "info@bowlcollection.com",
      phone: "+1 (555) 123-4567", 
      address: "123 Design Street, Creative City, CC 12345",
      navigation: "Navegación",
      home: "Inicio",
      products: "Productos",
      collections: "Colecciones",
      social: "Síguenos",
      rights: "© 2024 Bowl Collection. Todos los derechos reservados."
    },
    en: {
      company: "Bowl Collection",
      tagline: "Elegance in every meal",
      contact: "Contact",
      email: "info@bowlcollection.com",
      phone: "+1 (555) 123-4567",
      address: "123 Design Street, Creative City, CC 12345",
      navigation: "Navigation",
      home: "Home",
      products: "Products", 
      collections: "Collections",
      social: "Follow us",
      rights: "© 2024 Bowl Collection. All rights reserved."
    }
  };

  const t = text[language];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{t.company}</h3>
            <p className="text-background/80 leading-relaxed">{t.tagline}</p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">{t.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">{t.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-background/80">{t.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t.navigation}</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-background/80 hover:text-primary transition-colors">
                {t.home}
              </a>
              <a href="#products" className="block text-background/80 hover:text-primary transition-colors">
                {t.products}
              </a>
              <a href="#collections" className="block text-background/80 hover:text-primary transition-colors">
                {t.collections}
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t.social}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}