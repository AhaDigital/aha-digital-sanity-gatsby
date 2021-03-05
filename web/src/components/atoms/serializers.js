import React from 'react'
import Figure from './Figure'
import FeaturedLink from './FeaturedLink'
import Heading from './Heading'
import SmallText from './SmallText'
import Text from './Text'

const BlockRenderer = props => {
  const style = props.node.style || 'normal'
  const type = props.node._type
  
  if(type === 'bodyPortableFeaturedLink') {
    return <FeaturedLink {...props}/>
  }

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '')
    return <Heading tagName={`h${level}`}>{props.children}</Heading>
  }
  switch(style) {
    case 'small':
      return <SmallText>{props.children}</SmallText>
    case 'blockquote':
      return <blockquote>{props.children}</blockquote>
    default:
      return <Text>{props.children}</Text>
  }
}

const serializers = {
  types: {
    mainImage: Figure,
  },
  block: BlockRenderer
}

export default serializers
