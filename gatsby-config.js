const siteConfig = require("./config/site-config");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -90,
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_CMS_KEY,
      },
    },

    {
      resolve: "gatsby-plugin-sitemap",
      /*       options: {
        output: "/",
        resolveSiteUrl: () => siteConfig.siteUrl,
      }, */
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: siteConfig.siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteConfig.siteUrl,
        sitemap: `${siteConfig.siteUrl}${siteConfig.sitemapPath}`,
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.js"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IPlayfair Display, Roboto`],
        display: "swap",
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "render-blocking",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.google.com"],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: "/fonts/fontAwesome/css/all.min.css",
          },
        ],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Roboto",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Roboto",
          },
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Playfair Display",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Playfair+Display",
          },
        ],
      },
    },
  ],
};
