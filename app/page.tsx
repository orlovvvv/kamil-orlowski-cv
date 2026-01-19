"use client";

import { useState, useEffect } from "react";
import { TopBar } from "@/components/top-bar";
import { CVTemplate } from "@/components/cv";
import { cvData, type Language } from "@/lib/cv-data";

function getStoredLanguage(): Language | null {
  try {
    const saved = localStorage.getItem("cv-language");
    if (saved === "en" || saved === "pl") {
      return saved;
    }
  } catch {
    // localStorage may be unavailable in some contexts
  }
  return null;
}

function setStoredLanguage(lang: Language): void {
  try {
    localStorage.setItem("cv-language", lang);
  } catch {
    // localStorage may be unavailable in some contexts
  }
}

export default function Home() {
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const saved = getStoredLanguage();
    setLanguage(saved ?? "en");
  }, []);

  function handleLanguageChange(lang: Language) {
    setLanguage(lang);
    setStoredLanguage(lang);
  }

  if (language === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar language={language} onLanguageChange={handleLanguageChange} />
      <CVTemplate data={cvData[language]} />
    </div>
  );
}
