import React from 'react'
import Figure from './Figure'
import FeaturedLink from './FeaturedLink'
import Heading from './Heading'

const BlockRenderer = props => {
  const style = props.node.style || 'normal'
 
  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '')
    return <Heading tagName={`h${level}`}>{props.children}</Heading>
  }
 
  //TODO: Replace with components
  return style === 'blockquote'
    ? <blockquote className="my-block-quote">{props.children}</blockquote>
    : <p className="my-paragraph">{props.children}</p>
}

const serializers = {
  types: {
    mainImage: Figure,
    bodyPortableFeaturedLink: FeaturedLink,
  },
  block: BlockRenderer
}

export default serializers
