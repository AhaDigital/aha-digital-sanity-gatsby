import React from 'react'
import Grid from '../Grid'
import PortableText from '../../atoms/portableText'

const Text = ({ bodyPortableText }) => {
  return (
    <Grid tagName="section" maxWidth="default" withPadding>
      <Grid.Unit withGutter size={{sm: 12, md: 10}}>
        <PortableText blocks={bodyPortableText} />
      </Grid.Unit>
    </Grid>
  )
}

export default Text
