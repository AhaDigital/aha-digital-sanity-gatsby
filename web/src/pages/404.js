import React from 'react'
import App from '../app'

const pageSEO = { ogTitle: '404: Not found', ogDescription: 'hej'}

const NotFoundPage = () => (
  <App pageSEO={pageSEO}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </App>
)

export default NotFoundPage
