"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { TopBar } from "@/components/top-bar";
import { CVTemplate } from "@/components/cv";
import { cvData, type Language, type CVVariant } from "@/lib/cv-data";

function CVContent() {
  const searchParams = useSearchParams();

  // Read initial state from URL with defaults
  const lang = (searchParams.get("lang") === "pl" ? "pl" : "en") as Language;
  const variant = (searchParams.get("variant") === "admin" ? "admin" : "programming") as CVVariant;

  return (
    <div className="min-h-screen bg-background">
      <TopBar language={lang} variant={variant} />
      <CVTemplate data={cvData[lang][variant]} />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      }
    >
      <CVContent />
    </Suspense>
  );
}
