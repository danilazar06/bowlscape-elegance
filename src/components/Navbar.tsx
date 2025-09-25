import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSelector, Language } from "./LanguageSelector";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const text = {
    es: {
      home: "Inicio",
      products: "Productos", 
      collections: "Colecciones",
      cta: "Comprar ahora",
      logo: "Bowl Collection"
    },
    en: {
      home: "Home",
      products: "Products",
      collections: "Collections", 
      cta: "Shop now",
      logo: "Bowl Collection"
    }
  };

  const t = text[language];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground tracking-tight">
              {t.logo}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                {t.home}
              </a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                {t.products}
              </a>
              <a href="#collections" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                {t.collections}
              </a>
            </div>
          </div>

          {/* Right side - Language selector and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
            <Button variant="default" className="font-medium">
              {t.cta}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.home}
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.products}
              </a>
              <a
                href="#collections"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.collections}
              </a>
              <div className="px-3 py-2">
                <Button variant="default" className="w-full font-medium">
                  {t.cta}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}