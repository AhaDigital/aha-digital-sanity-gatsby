import React from 'react'
import {Grid, GridColumn} from '../Grid'
import FoldableList from '../../atoms/FoldableList'
import PortableText from '../../atoms/portableText'
import Heading from '../../atoms/Heading'

const ListContentSection = ({ bodyPortableText, listBlock = {}, addContrast }) => {
  const { listBlockTitle, listBlockList } = listBlock

  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
      <GridColumn withGutter columnSize={{sm: 12, md: 6}}>
        <PortableText blocks={bodyPortableText} />
      </GridColumn>
      <GridColumn withGutter columnSize={{sm: 12, md: 6}}>
        {
          listBlockTitle && (
            <Heading tagName="h3" addContrast={addContrast}>{listBlockTitle}</Heading>
          )
        }
        <FoldableList list={listBlockList} />
      </GridColumn>
    </Grid>
  )
}

export default ListContentSection
