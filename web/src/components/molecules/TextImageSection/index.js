import React from 'react'
import Grid from '../Grid'
import PortableText from '../../atoms/portableText'
import Figure from '../../atoms/Figure'
import TextContainer from '../../atoms/TextContainer'

const TextImageSection = ({ blockImageDirectionLeft, bodyPortableText, mainImage }) => {
  const heading = []
  const rest = []

  bodyPortableText.forEach(element => {
    const {style} = element

    if(style === 'h2') {
      heading.push(element)
    } else {
      rest.push(element)
    }
  })

  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
      {
        heading.length > 0 && (
          <Grid.Unit withGutter size={{sm: 12, md: 6}} withClearFix>
            <TextContainer withPadding margin={{marginDirection: 'bottom', marginSize: 'md'}}>
              <PortableText blocks={heading} />
            </TextContainer>
          </Grid.Unit>
        )
      }
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        <TextContainer withPadding>
          {blockImageDirectionLeft ? (
            <Figure node={mainImage} />
          ) : (
            <PortableText blocks={rest} />
          )}
        </TextContainer>
      </Grid.Unit>
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        <TextContainer withPadding>
          {blockImageDirectionLeft ? (
            <PortableText blocks={rest} />
          ) : (
            <Figure node={mainImage} />
          )}
        </TextContainer>
      </Grid.Unit>
    </Grid>
  )
}

export default TextImageSection
