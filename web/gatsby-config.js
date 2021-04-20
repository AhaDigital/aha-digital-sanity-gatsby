// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

const breakpoints = {
  sm: '(min-width: 0)',
  md: '(min-width: 768px)',
  lg: '(min-width: 960px)',
};

module.exports = {
  siteMetadata: {
    siteUrl: `https://ahadigital.se`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-breakpoints',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: breakpoints,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aha Digital`,
        short_name: `Aha Digital`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: 'src/images/icon.png',
        lang: 'sv',
        cache_busting_mode: 'none'
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/tjanster`, `/uppdrag`, '/om-aha', '/universell-utformning-och-tillganglighet', 'kontakt'],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-P192NLV2JR",
        ],
      },
    },
  ]
}
