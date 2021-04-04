import React from 'react'
import {graphql, Link} from 'gatsby'
import get from 'lodash.get'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import Heading from '../components/atoms/Heading'
import FeaturedLink from '../components/atoms/FeaturedLink'
import Grid from '../components/molecules/Grid'
import App from '../app'

export const query = graphql`
  query PageQuery {
    pages: allSanityPages(
      filter: { slug: { current: { ne: null } }, _id: {ne: "a78c99c2-4c15-4a29-9bf8-0d46f834422d"}}
    ) {
      edges {
        node {
          _key
          title
          slug {
            current
          }
        }
      }
    }
  }
`
const Webbplatskarta = props => {
  const {data, errors, location} = props

  const pages = get(data, 'pages.edges', []) || []

  if (errors) {
    return (
      <App>
        <GraphQLErrorList errors={errors} />
      </App>
    )
  }

  const pageSEO = { ogTitle: 'Webbplatskarta', ogDescription: null, ogImage: {} }

  return (
    <App pageSEO={pageSEO} location={location}>
      <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
        <Grid.Unit withGutter>
          <Heading>Webbplatskarta</Heading>
          <nav aria-label="webbplatskarta">
            <ol aria-label="sitemap">
              <li>
                <FeaturedLink node={{href: "/", linkName: "Startsida", color: '#000000'}}/>
              </li>
              {
                pages.map(page => {
                  const {node = {}} = page
                  if(node) {
                    const {_key, slug = {}, title = ''} = node
                    return slug.current ? (
                      <li key={_key}>
                        <FeaturedLink node={{href: `/${slug.current}/`, linkName: title, color: '#000000'}} />
                      </li>
                    ) : null
                  }
                })
              }
            </ol>
          </nav>
        </Grid.Unit>
      </Grid>
    </App>
  )
}

export default Webbplatskarta
