import React from 'react'
import {Link} from 'gatsby'
import get from 'lodash.get'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import Heading from '../components/atoms/Heading'
import App from '../app'

const SitemapPage = props => {
  const {data, errors, pageContext} = props
  const pages = get(pageContext, 'pageEdges', []) || []

  if (errors) {
    return (
      <App>
        <GraphQLErrorList errors={errors} />
      </App>
    )
  }

  const pageSEO = { ogTitle: 'Webbplatskarta' }

  return (
    <App pageSEO={pageSEO}>
      <Heading>Webbplatskarta</Heading>
      <nav aria-label="webbplatskarta">
        <ul aria-label="sitemap">
          <li>
            <Link to="/" aria-current="page">Startsida</Link>
          </li>
          {
            pages.map(page => {
              const {node = {}} = page
              if(node) {
                const {_key, slug = {}, title = ''} = node
                return slug.current ? (
                  <li key={_key}>
                    <Link to={`/${slug.current}/`}>{title}</Link>
                  </li>
                ) : null
              }
            })
          }
        </ul>
      </nav>
    </App>
  )
}

export default SitemapPage
