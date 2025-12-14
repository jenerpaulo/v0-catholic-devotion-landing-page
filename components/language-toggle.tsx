"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg border border-border">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="rounded-full gap-2 px-3"
      >
        <span className="text-lg">🇺🇸</span>
        <span className="text-xs font-serif">EN</span>
      </Button>
      <Button
        variant={language === "pt" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("pt")}
        className="rounded-full gap-2 px-3"
      >
        <span className="text-lg">🇧🇷</span>
        <span className="text-xs font-serif">PT</span>
      </Button>
    </div>
  )
}
