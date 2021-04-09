import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash.get'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import FeaturedLink from '../components/atoms/FeaturedLink'
import {Grid, GridColumn} from '../components/molecules/Grid'
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
  
  const hero = {
    title: 'Webbplatskarta',
    heading: [{
      text: 'Webbplatskarta',
      withDecorator: true,
      _key: 'staticHeading',
      _type: 'inlineTextListItem'
    }],
    intro: null,
    image: {}
  }
  
  return (
    <App pageSEO={pageSEO} location={location} hero={hero}>
      <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
        <GridColumn withGutter>
          <nav aria-label="webbplatskarta">
            <ol aria-label="sitemap">
              <li>
                <FeaturedLink node={{href: "/", linkName: "Startsida", linkColour: '#000000'}}/>
              </li>
              {
                pages.map(page => {
                  const {node = {}} = page
                  if(node) {
                    const {_key, slug = {}, title = ''} = node
                    return slug.current ? (
                      <li key={_key}>
                        <FeaturedLink node={{href: `/${slug.current}/`, linkName: title, linkColour: '#000000'}} />
                      </li>
                    ) : null
                  }
                })
              }
            </ol>
          </nav>
        </GridColumn>
      </Grid>
    </App>
  )
}

export default Webbplatskarta
