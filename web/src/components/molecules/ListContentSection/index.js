import React from 'react'
import Grid from '../Grid'
import FoldableList from '../../atoms/FoldableList'
import PortableText from '../../atoms/portableText'
import Heading from '../../atoms/Heading'

const ListContentSection = ({ bodyPortableText, listBlock = {}, addContrast }) => {
  const { listBlockTitle, listBlockList } = listBlock

  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        <PortableText blocks={bodyPortableText} />
      </Grid.Unit>
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        {
          listBlockTitle && (
            <Heading tagName="h3" addContrast={addContrast}>{listBlockTitle}</Heading>
          )
        }
        <FoldableList list={listBlockList} />
      </Grid.Unit>
    </Grid>
  )
}

export default ListContentSection
