import { Head, Html, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="Página completa de vagas da empresa fictícia OptimusTech." />
        <meta name="keywords" content="React, Next.js, TypeScript" />
        <meta name="author" content="Rian Oliveira" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
