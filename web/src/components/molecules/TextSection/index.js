import React from 'react'
import Grid from '../Grid'
import PortableText from '../../atoms/portableText'

const TextSection = ({ bodyPortableText }) => {
  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
      <Grid.Unit withGutter size={{sm: 12, md: 10}}>
        <PortableText blocks={bodyPortableText} />
      </Grid.Unit>
    </Grid>
  )
}

export default TextSection
