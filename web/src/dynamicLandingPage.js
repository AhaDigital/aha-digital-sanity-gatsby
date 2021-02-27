import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash.get'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
} from './lib/helpers'
import GraphQLErrorList from './components/atoms/graphql-error-list'
import Content from './components/organisms/content'
import Footer from './components/molecules/Footer'
import App from './app'

export const query = graphql`
  query LandingPageQuery($id: String!) {
    page: sanityPages(id: {eq: $id}) {
      id
      title
      pageH1 {
        _rawInlineTextList(resolveReferences: {maxDepth: 10})
      }
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
      _rawContent(resolveReferences: {maxDepth: 10})
      salesPitchBlock {
        inlineTextList {
          ... on SanityInlineTextListItem {
            _key
            _type
            text
            withLineBreak
          }
          ... on SanityBodyPortableRollingText {
            _key
            _type
            bodyPortableRollingTextWords {
              word
              _key
            }
          }
        }
      }
    }
  }
`

const LandingPage = props => {
  const {data, errors} = props

  const page = (data || {}).page
  const contentSections = get(page, '_rawContent.contentBlockType', []) || []
  const salesPitch = get(page, 'salesPitchBlock', []) || []
  const pageSeo = get(page, 'seo', {}) || {}

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

  return (
    <App pageSEO={pageSeo}>
      /* hide this */
      <h1>Welcome to landingpage...</h1>
      <Content sections={contentSections} />
      <Footer salesPitch={salesPitch} />
    </App>
  )
}

export default LandingPage
