/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR" data-theme="light">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://trydo.com.br/cdn/luxy.min.js"></script>
        <script>luxy.init();</script>
      </body>
    </Html>
  );
}
