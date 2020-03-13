const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/products": { page: "/products" },
      "/products/[id]": { page: "/products/[id]" }
    };
  }
});
