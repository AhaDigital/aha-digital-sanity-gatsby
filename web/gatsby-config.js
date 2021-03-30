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
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-breakpoints',
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
  ]
}
