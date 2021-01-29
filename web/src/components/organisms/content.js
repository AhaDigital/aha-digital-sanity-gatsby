import React from 'react'
import TextImage from '../molecules/TextImage'
import Text from '../molecules/Text'

const Content = ({ sections }) => {
  const Section = sections.map(section => {
    const { _type, _key } = section

    switch(_type) {
      case 'textImageBlock':
        return <TextImage key={_key} {...section} />
      case 'columnsBlock':
        return (
          <div key={_key}>Columns block</div>
        )
      case 'textBlock':
        return <Text key={_key} {...section} />
      default:
        return null
    }
  })

  return Section
}

export default Content
