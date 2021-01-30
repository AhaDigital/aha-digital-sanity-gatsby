import React from 'react'
import { Link } from 'gatsby'

export default ({node}) => {
  const { href, linkName } = node
  if(!href || !linkName) return null

  return (
    <div>
      {
        href.indexOf('http') > -1 ? (
          <a href={href}>{linkName}</a>
        ) : (
          <Link to={href}>{linkName}</Link>
        )
      }
    </div>
  )
}
