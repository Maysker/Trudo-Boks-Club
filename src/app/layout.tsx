import config from "@/config/config.json";
import theme from "@/config/theme.json";
import "@/styles/main.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Connecting fonts
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        {/* Meta tag for responsiveness */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Favicon*/}
        <link rel="shortcut icon" href={config.site.favicon} />
        {/* Meta tags for the topic */}
        <meta name="theme-name" content="Trudo Boks Club" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* Connecting Google fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning={true}>
        {children}
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>

      </body>
    </html>
  );
}
