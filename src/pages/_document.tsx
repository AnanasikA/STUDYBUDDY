import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        {/* Google Fonts CDN – Playfair + Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
