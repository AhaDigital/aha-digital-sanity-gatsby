import React from 'react'
import Grid from '../Grid'
import FoldableList from '../../atoms/FoldableList'
import PortableText from '../../atoms/portableText'

const ListContentSection = ({ bodyPortableText, listBlock = {} }) => {
  const { listBlockTitle, listBlockList } = listBlock

  return (
    <Grid tagName="section" maxWidth="default" withPadding>
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        <PortableText blocks={bodyPortableText} />
      </Grid.Unit>
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        {
          listBlockTitle && (
            <h2>{listBlockTitle}</h2>
          )
        }
        <FoldableList list={listBlockList} />
      </Grid.Unit>
    </Grid>
  )
}

export default ListContentSection
