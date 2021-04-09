import React from 'react'
import {Grid, GridColumn} from '../Grid'
import FoldableList from '../../atoms/FoldableList'
import Heading from '../../atoms/Heading'
const ListSection = ({ listBlockTitle: title, listBlockList = [], addContrast}) => {
  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
      <GridColumn withGutter columnSize={{sm: 12, md: 8, lg: 6}}>
        {
          title && (
            <Heading tagName="h3" addContrast={addContrast}>{title}</Heading>
          )
        }
        <FoldableList list={listBlockList} />
      </GridColumn>
    </Grid>
  )
}

export default ListSection
