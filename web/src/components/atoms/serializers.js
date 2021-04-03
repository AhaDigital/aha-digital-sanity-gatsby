import React from 'react'
import Figure from './Figure'
import FeaturedLink from './FeaturedLink'
import Heading from './Heading'
import SmallText from './SmallText'
import SpanBlockText from './SpanBlockText'
import Text from './Text'

const BlockRenderer = props => {
  const style = props.node.style || 'normal'
  const type = props.node._type
  
  if(type === 'bodyPortableFeaturedLink') {
    return <FeaturedLink {...props}/>
  }

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '')
    const addContrast = props.node.addContrast

    return <Heading tagName={`h${level}`} addContrast={addContrast}>{props.children}</Heading>
  }

  switch(style) {
    case 'small':
      return <SmallText>{props.children}</SmallText>
    case 'spanblock':
      return <SpanBlockText>{props.children}</SpanBlockText>
    case 'blockquote':
      return <blockquote>{props.children}</blockquote>
    default:
      if(props.children.length === 1 && props.children[0] === '') {
        return <SpanBlockText asLineBreak/>
      }
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
