import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Collections } from "@/components/Collections";
import { Footer } from "@/components/Footer";
import { Language } from "@/components/LanguageSelector";

const Index = () => {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Products language={language} />
      <Collections language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
