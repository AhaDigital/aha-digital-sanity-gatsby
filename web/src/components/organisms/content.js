import React from 'react'
import TextImageSection from '../molecules/TextImageSection'
import TextSection from '../molecules/TextSection'
import ColumnsSection from '../molecules/ColumnsSection'
import ListSection from '../molecules/ListSection'
import ListContentSection from '../molecules/ListContentSection'

const Content = ({ sections, addContrast }) => {

  const Section = sections.map(section => {
    const { _type, _key } = section

    switch(_type) {
      case 'textImageBlock':
        return <TextImageSection key={_key} {...section} addContrast={addContrast} />
      case 'columnsBlock':
        return <ColumnsSection key={_key} {...section} addContrast={addContrast} />
      case 'textBlock':
        return <TextSection key={_key} {...section} addContrast={addContrast} />
      case 'listBlock':
        return <ListSection key={_key} {...section} addContrast={addContrast} />
      case 'listContentBlock':
        return <ListContentSection key={_key} {...section} addContrast={addContrast} />
      default:
        return null
    }
  })

  return Section
}

export default Content
