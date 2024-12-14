const config = require("./src/config/config.json");
const languages = require("./src/config/language.json");

const disableLanguages = config.settings.disable_languages || [];
const activeLanguages = languages.filter(
  (lang) => !disableLanguages.includes(lang.languageCode)
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

    // Add rewrites for non-default languages
    otherLanguages.forEach((lang) => {
      rewrites.push({
        source: `/${lang}/:path*`,
        destination: `/${lang}/:path*`,
      });
    });

    // Add rewrite for the default language
    if (config.settings.default_language_in_subdir) {
      rewrites.push({
        source: `/${defaultLanguage}/:path*`,
        destination: `/${defaultLanguage}/:path*`,
      });
    } else {
      rewrites.push({
        source: `/:path*`,
        destination: `/${defaultLanguage}/:path*`,
      });
    }

    return rewrites;
  },

  async redirects() {
    const redirects = [];

    // Redirect root to default language if needed
    if (config.settings.default_language_in_subdir) {
      redirects.push({
        source: "/",
        destination: `/${defaultLanguage}`,
        permanent: false,
      });
    }

    return redirects;
  },
};

module.exports = nextConfig;
