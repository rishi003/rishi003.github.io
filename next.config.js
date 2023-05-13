// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/rishi003.github.io/" : "",
  images: {
    unoptimized: true,
  },
};
