"use client";

import languages from "@/config/language.json";
import { getDefaultLanguage } from "@/lib/languageParser";
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
  const defaultLang = useMemo(getDefaultLanguage, []);
  const [language, setLanguage] = useState(lang);
  const router = useRouter();
  const pathname = usePathname();

  const redirectedPathName = useCallback(
    (locale: string) => {
      const currentPath = pathname.replace(/^\/(en|fr)/, "").replace(/^\/|\/$/g, ""); // Удаляем текущий язык
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
      {languages.map((language) => (
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
