import React from 'react'
import App from '../app'

const pageSEO = { ogTitle: '404: Not found'}

const NotFoundPage = (props) => {
  const {location} = props
  return (

    <App pageSEO={pageSEO} location={location}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </App>
  )
}

export default NotFoundPage
