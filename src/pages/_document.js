import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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
  render() {
    return (
      <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name='description' content='Sys&CoTech club' />
        <meta name='author' content='Sys&CoTech club' />
        <meta
          name='keywords'
          content='syscotech, sysco, Sys&CoTech, syscotech club, sys&cotech, syscotech.club, MUST, SICT, club, tech'
        />
        <meta name='theme-color' content='#10ac84' />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type content=text/html; charset=utf-8' />
        {/* [if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge" /><![endif] */}
        <meta property='og:title' content='Sys&CoTech club' />
        <meta property='og:description' content='ШУТИС-МХТС Sys&CoTech клуб' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={`http://www.syscotech.club`} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='600' />
        <meta property='og:site_name' content='syscotech.club' />
        <meta property='og:locale' content='mn_MN' />
        <meta property='og:url' content='http://www.syscotech.club' />
        {/* <link
          rel="icon"
          href="https://react-next-landing.redq.io/_next/static/images/favicon-ec2551afb2782a53fb493269d1ba4efe.png"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    );
  }
}
