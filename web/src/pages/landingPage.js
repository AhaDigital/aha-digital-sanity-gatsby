import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
} from '../lib/helpers'
import Grid from '../components/molecules/Grid'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import SEO from '../components/atoms/seo'
import App from '../app'

export const query = graphql`
  query LandingPageQuery($id: String!) {
    page: sanityPages(id: {eq: $id}) {
      id
      title
      pageH1
      intro
      slug {
        current
      }
      seo {
        ogDescription
        ogTitle
        ogImage {
          asset {
            _id
          }
        }
      }
      mainImage {
        ...SanityImage
        alt
      }
      content {
        _rawContentBlockType(resolveReferences: {maxDepth: 10})
      }
      _rawSalesPitchBlock(resolveReferences: {maxDepth: 5})
    }
  }
`

const LandingPage = props => {
  const {data, errors} = props

  console.log('DATA', data)
  if (errors) {
    return (
      <App>
        <GraphQLErrorList errors={errors} />
      </App>
    )
  }
/*
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }*/
  const pageSEO = { ogTitle: 'YOLO', ogDescription: 'hej'}
  return (
    <App pageSEO={pageSEO}>
      /* hide this */
      <h1>Welcome to landingpage...</h1>
    </App>
  )
}

export default LandingPage
