const path = require('path');

module.exports = withNextra({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@medusajs/docs': path.join(__dirname, 'components/docs/CustomMDXComponents'),
      '@theme/CodeBlock': path.join(__dirname, 'components/docs/CustomMDXComponents'),
    };
    return config;
  },
});

export {}; 

function withNextra(arg0: { reactStrictMode: boolean; webpack: (config: any) => any; }): any {
    throw new Error("Function not implemented.");
}

