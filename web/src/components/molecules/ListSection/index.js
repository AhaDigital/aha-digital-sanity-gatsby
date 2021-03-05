import React from 'react'
import Grid from '../Grid'
import FoldableList from '../../atoms/FoldableList'

const ListSection = ({ listBlockTitle: title, listBlockList = []}) => {
  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        {
          title && (
            <h2>{title}</h2>
          )
        }
        <FoldableList list={listBlockList} />
      </Grid.Unit>
    </Grid>
  )
}

export default ListSection
