import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import {Grid, GridColumn} from '../Grid'
import PortableText from '../../atoms/portableText'

const TextSection = ({ bodyPortableText, BlockDirectionLeft, addContrast, pathname }) => {
  const breakpoints = useBreakpoint()

  bodyPortableText.forEach(element => {
    const {style} = element
    if(style === 'h2' || style === 'h3') {
      element.addContrast = addContrast
    }
  })

  let justify = 'flex-start'
  if(breakpoints.md) {
    if(pathname === '/') {
      justify = 'center'
    }
  } else if(!BlockDirectionLeft) {
    justify = 'center'
  }

  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl" justify={justify}>
      <GridColumn withGutter columnSize={{sm: 12, md: 8, lg: 6}}>
        <PortableText blocks={bodyPortableText} />
      </GridColumn>
    </Grid>
  )
}

export default TextSection
