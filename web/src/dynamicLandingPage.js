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
    site: sanitySiteSettings {
      contactInfo {
        person {
          email
          name
          phone
          title
          image {
            asset {
              _id
            }
            alt
          }
        }
      }
    }
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
  const {data, errors, location} = props

  const page = (data || {}).page
  const site = (data || {}).site
  const heading = get(page, 'pageH1.inlineTextList', []) || []
  const contentSections = get(page, '_rawContent.contentBlockType', []) || []
  const salesPitch = get(page, 'salesPitchBlock', []) || []
  const pageSeo = get(page, 'seo', {}) || {}
  const image = get(page, 'mainImage', {}) || {}
  const intro = get(page, 'intro') || null
  const contactPerson = get(site, 'contactInfo.person[0]', {}) || {}

  if (errors) {
    return (
      <App>
        <GraphQLErrorList errors={errors} />
      </App>
    )
  }

  const footerData = {
    salesPitch,
    contactPerson
  }

  const heroData = {
    image,
    heading,
    intro
  }

  return (
    <App pageSEO={pageSeo} location={location} hero={heroData} footer={footerData}>
      <Content sections={contentSections} />
    </App>
  )
}

export default LandingPage
