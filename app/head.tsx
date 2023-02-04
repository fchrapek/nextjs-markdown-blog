import { site } from "config";

export default function Head() {
  return (
    <>
      <title>{site.seo.title}</title>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content={site.seo.description}
      />
      <meta
        property="og:title"
        content={site.seo.title}
      />
      <meta
        property="og:description"
        content={site.seo.description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://happyspiders.pl/" />
      <meta property="og:image" content="https://happyspiders.pl/og.jpg" />
      <meta
        name="twitter:title"
        content={site.seo.title}
      />
      <meta name="twitter:card" content="summary_large_card" />
      <meta name="twitter:site" content="@" />
      <meta name="twitter:image" content="https://happyspiders.pl/og.jpg" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="canonical" href="https://happyspiders.pl/" />
    </>
  );
}
