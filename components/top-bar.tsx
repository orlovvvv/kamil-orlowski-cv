"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconDownload, IconLanguage, IconLoader } from "@tabler/icons-react";
import { type Language } from "@/lib/cv-data";

interface TopBarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function TopBar({ language, onLanguageChange }: TopBarProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  async function handleDownloadPDF() {
    setIsGenerating(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

    try {
      const response = await fetch(`/api/pdf?lang=${language}`, {
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
      link.download = `cv-kamil-orlowski-${language}.pdf`;
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[800px] mx-auto flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <IconLanguage className="size-4 text-muted-foreground" />
          <Select
            value={language}
            onValueChange={(val) => onLanguageChange(val as Language)}
          >
            <SelectTrigger className="w-[120px]" size="sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="pl">Polski</SelectItem>
            </SelectContent>
          </Select>
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
