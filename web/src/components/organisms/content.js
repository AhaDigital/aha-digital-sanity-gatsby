import React from 'react'
import TextImage from '../molecules/TextImage'

const Content = ({ sections }) => {
  const Section = sections.map(section => {
    const { _type, _key } = section

    switch(_type) {
      case 'textImageBlock':
        return (<TextImage key={_key} {...section} />)
      case 'columnsBlock':
        return (
          <div key={_key}>Columns block</div>
        )
      case 'textBlock':
        return (
          <div key={_key}>Text block</div>
        )
      default:
        return null
    }
  })

  return Section
}

export default Content
