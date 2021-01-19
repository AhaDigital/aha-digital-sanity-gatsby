import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Grid from '../components/molecules/Grid'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import SEO from '../components/atoms/seo'
import App from '../app'

/*fragment SanityImage on SanityMainImage {
 crop {
 _key
 _type
 top
 bottom
 left
 right
 }
 hotspot {
 _key
 _type
 x
 y
 height
 width
 }
 asset {
 _id
 }
 }*/

export const query = graphql`

  query IndexPageQuery {
    site: sanitySiteSettings {
      mainMenu {
        mainMenuPages {
          page {
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`
/*
* posts: allSanityPost(
 limit: 6
 sort: { fields: [publishedAt], order: DESC }
 filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
 ) {
 edges {
 node {
 id
 publishedAt
 mainImage {
 ...SanityImage
 alt
 }
 title
 _rawExcerpt
 slug {
 current
 }
 }
 }
 }
* */
const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <App>
        <GraphQLErrorList errors={errors} />
      </App>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  const pageSEO = { ogTitle: 'YOLO', ogDescription: 'hej'}
  return (
    <App pageSEO={pageSEO}>
      /* hide this */
      <h1>Welcome to ...</h1>
    </App>
  )
}

export default IndexPage
