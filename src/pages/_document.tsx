import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): React.ReactElement {
    return (
      <Html lang="pt">
        <Head>
          <link
            rel="preload"
            href="https://vuttr.codar.space/logo.svg"
            as="image"
            type="image/svg+xml"
          />
          <meta charSet="utf-8" />
          {/* SEO Meta Tags */}
          <meta itemProp="name" content="BossaBox Front-End VUTtR" />
          <meta
            name="description"
            content="Very Useful Tools to Remember. Uma aplicação simples para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
