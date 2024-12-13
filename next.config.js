const config = require("./src/config/config.json");
const languages = require("./src/config/language.json");
const disableLanguages = config.settings.disable_languages;
const activeLanguages = languages.filter(
  (lang) => !disableLanguages.includes(lang.languageCode),
);

const defaultLanguage = config.settings.default_language;

const otherLanguages = activeLanguages
  .map((lang) => lang.languageCode)
  .filter((lang) => lang !== defaultLanguage);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  output: "standalone",
  async rewrites() {
    const rewrites = [];
  
    // Handling languages ​​other than the default language
    otherLanguages.forEach((lang) => {
      rewrites.push({
        source: `/${lang}/:path*`, // Prefixes for other languages
        destination: `/${lang}/:path*`,
      });
    });
  
    // Handle default language (no prefix)
    rewrites.push({
      source: `/:path*`,
      destination: `/${defaultLanguage}/:path*`,
    });
  
    return rewrites;
  }
  
};

module.exports = nextConfig;
