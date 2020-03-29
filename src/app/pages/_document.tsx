import { ServerStyleSheets } from '@material-ui/styles';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import theme from '../ui-components/theme';

class MoodliDocument extends Document {
  public static async getInitialProps(ctx) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        <React.Fragment key='styles'>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>
      ]
    };
  }

  public render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <meta
            name='viewport'
            content='initial-scale=1,maximum-scale=1,user-scalable=no'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Sen:400&display=swap'
          />
          <link
            href='https://api.mapbox.com/mapbox-gl-js/v1.9.0/mapbox-gl.css'
            rel='stylesheet'
          />
          <link
            href='https://api.mapbox.com/mapbox-assembly/mbx/v0.18.0/assembly.min.css'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css'
            type='text/css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://api.mapbox.com/mapbox-assembly/mbx/v0.18.0/assembly.js' />
        </body>
      </html>
    );
  }
}

export default MoodliDocument;
