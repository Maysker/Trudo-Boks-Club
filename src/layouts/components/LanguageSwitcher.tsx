"use client";

import { getDefaultLanguage, getActiveLanguages } from "@/lib/languageParser";
import { slugSelector } from "@/lib/utils/slugSelector";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

export default function LanguageSwitcher({
  className,
  lang,
}: {
  className?: string;
  lang: string;
}) {
  const defaultLang = useMemo(() => getDefaultLanguage(), []); // Get the default language
  const activeLanguages = useMemo(() => getActiveLanguages(), []); // Get active languages
  const [language, setLanguage] = useState(lang);
  const router = useRouter();
  const pathname = usePathname();

  const redirectedPathName = useCallback(
    (locale: string) => {
      const currentPath = pathname.replace(/^\/(en|fr)/, "").replace(/^\/|\/$/g, "");// Remove the current language
      const newPath = slugSelector(locale, currentPath);
      router.push(newPath);
    },
    [pathname]
  );

  return (
    <select
      name="language"
      value={language}
      className={className}
      onChange={(e) => {
        const newLang = e.target.value;
        setLanguage(newLang);
        redirectedPathName(newLang);
      }}
    >
      {activeLanguages.map((language) => (
        <option
          key={language.languageCode}
          id={language.languageCode}
          value={language.languageCode.toLowerCase()}
        >
          {language.languageName}
        </option>
      ))}
    </select>
  );
}
