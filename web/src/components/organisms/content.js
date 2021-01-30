import React from 'react'
import TextImageSection from '../molecules/TextImageSection'
import TextSection from '../molecules/TextSection'
import ColumnsSection from '../molecules/ColumnsSection'

const Content = ({ sections }) => {
  const Section = sections.map(section => {
    const { _type, _key } = section

    switch(_type) {
      case 'textImageBlock':
        return <TextImageSection key={_key} {...section} />
      case 'columnsBlock':
        return <ColumnsSection key={_key} {...section} />
      case 'textBlock':
        return <TextSection key={_key} {...section} />
      default:
        return null
    }
  })

  return Section
}

export default Content
