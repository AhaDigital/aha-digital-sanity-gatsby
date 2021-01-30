import React from 'react'
import Grid from '../Grid'
import PortableText from '../../atoms/portableText'
import Figure from '../../atoms/Figure'

const TextImageSection = ({ blockImageDirectionLeft, bodyPortableText, mainImage }) => {
  return (
    <Grid tagName="section" maxWidth="default" withPadding>
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        {blockImageDirectionLeft ? (
          <Figure node={mainImage} />
        ) : (
          <PortableText blocks={bodyPortableText} />
        )}
      </Grid.Unit>
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        {blockImageDirectionLeft ? (
          <PortableText blocks={bodyPortableText} />
        ) : (
          <Figure node={mainImage} />
        )}
      </Grid.Unit>
    </Grid>
  )
}

export default TextImageSection
