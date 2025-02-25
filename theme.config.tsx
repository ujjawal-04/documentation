import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>RUO Documentation</span>,
  project: {
    link: 'https://github.com/RUO-2025/storefront/',
  },
  docsRepositoryBase: 'https://github.com/RUO-2025/storefront/',
  footer: {
    text: 'RUO Docs',
  },
  // @ts-ignore
  head: function Head({ title }: { title?: string }): JSX.Element {
    return (
      <>
        <title>{title ? `${title} – RUO Documentation` : 'RUO Documentation'}</title>
      </>
    );
  },
};

export default config;
