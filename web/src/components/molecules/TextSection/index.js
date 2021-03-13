import React from 'react'
import Grid from '../Grid'
import PortableText from '../../atoms/portableText'

const TextSection = ({ bodyPortableText, BlockDirectionLeft }) => {
  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl" justify={BlockDirectionLeft ? 'flex-start' : 'center'}>
      <Grid.Unit withGutter size={{sm: 12, md: 10, lg: 7}}>
        <PortableText blocks={bodyPortableText} />
      </Grid.Unit>
    </Grid>
  )
}

export default TextSection
