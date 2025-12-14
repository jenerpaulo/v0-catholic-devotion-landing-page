"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border hover:bg-white transition-colors"
    >
      <span className="text-sm font-serif text-foreground">
        {language === "en" ? "EN" : "PT"} / {language === "en" ? "PT" : "EN"}
      </span>
    </button>
  )
}
