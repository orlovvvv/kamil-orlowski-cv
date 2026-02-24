"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconDownload, IconLanguage, IconLoader, IconCategory } from "@tabler/icons-react";
import { type Language, type CVVariant, variantLabels } from "@/lib/cv-data";

interface TopBarProps {
  language: Language;
  variant: CVVariant;
}

export function TopBar({ language, variant }: TopBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isGenerating, setIsGenerating] = useState(false);

  function updateParams(updates: { lang?: Language; variant?: CVVariant }) {
    const params = new URLSearchParams(searchParams.toString());
    const newLang = updates.lang ?? language;
    const newVariant = updates.variant ?? variant;

    params.set("lang", newLang);
    params.set("variant", newVariant);
    router.push(`?${params.toString()}`, { scroll: false });
  }

  function handleLanguageChange(lang: Language) {
    updateParams({ lang });
  }

  function handleVariantChange(variant: CVVariant) {
    updateParams({ variant });
  }

  async function handleDownloadPDF() {
    setIsGenerating(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

    try {
      const response = await fetch(`/api/pdf?lang=${language}&variant=${variant}`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/pdf")) {
        throw new Error("Invalid response format");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `cv-kamil-orlowski-${language}-${variant}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === "AbortError") {
        alert("PDF generation timed out. Please try again.");
      } else {
        console.error("Error generating PDF:", error);
        alert("Failed to generate PDF. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  }

  const labels = variantLabels[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[800px] mx-auto flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IconLanguage className="size-4 text-muted-foreground" />
            <Select value={language} onValueChange={(val) => handleLanguageChange(val as Language)}>
              <SelectTrigger className="w-[120px]" size="sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pl">Polski</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <IconCategory className="size-4 text-muted-foreground" />
            <Select value={variant} onValueChange={(val) => handleVariantChange(val as CVVariant)}>
              <SelectTrigger className="w-[180px]" size="sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="programming">{labels.programming}</SelectItem>
                <SelectItem value="admin">{labels.admin}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          size="sm"
          variant="outline"
        >
          {isGenerating ? (
            <>
              <IconLoader className="size-4 animate-spin" data-icon="inline-start" />
              Generating...
            </>
          ) : (
            <>
              <IconDownload className="size-4" data-icon="inline-start" />
              Download PDF
            </>
          )}
        </Button>
      </div>
    </header>
  );
}
