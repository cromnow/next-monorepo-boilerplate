import React, { Children } from "react";
import NextDocument from "next/document";
import { ServerStyleSheets } from "@arbete/ui";

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }
}

export default Document;
