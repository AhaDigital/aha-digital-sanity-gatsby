import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { imageUrlFor } from '../../../lib/image-url';
import {buildImageObj} from '../../../lib/helpers';
import Grid from '../Grid'
import theme from '../../themes'
import Heading from '../../atoms/Heading'
import InlineTextScentance from '../../atoms/InlineTextScentance'
import StyledHero from './styles'

const Hero = ({hero, addContrast}) => {
  const breakpoints = useBreakpoint()
  const {image, heading, intro} = hero
  const sanityImage = get(image, 'asset')
  let finalImage
  if(sanityImage) {
    if(breakpoints.sm || breakpoints.md) {
      finalImage = imageUrlFor(buildImageObj(image)).width(768).height(217).quality(80).auto("format").url()
    }
    else {
      finalImage = imageUrlFor(buildImageObj(image)).width(1920).height(355).quality(80).auto("format").url()
    }
  }
  return (
    <StyledHero image={finalImage}>
     <Grid tagName="section" withPadding maxWidth="default" align="center" justify="center">
        <Grid.Unit withGutter size={12}>
          <StyledHero.Heading>
            {heading.length > 0 && (
              <Heading addContrast={addContrast}>
                {
                  heading.map(part => <InlineTextScentance key={part._key} part={part} addContrast={addContrast} />)
                }
              </Heading>
            )}
            {intro && (
              <StyledHero.Intro>
                <Heading tagName="h2" displayAs="text" styles={`color: ${theme.palette.darker};`}>{intro}</Heading>
              </StyledHero.Intro>
            )}
          </StyledHero.Heading>
        </Grid.Unit>
      </Grid>
      <StyledHero.Bubbles>
      </StyledHero.Bubbles>
    </StyledHero>
  )
}

Hero.defaultProps = {
  hero: {
    image: {},
    heading: [],
    intro: null
  }
}
Hero.propTypes = {
  hero: PropTypes.shape({
    image: PropTypes.object,
    heading: PropTypes.arrayOf(PropTypes.object),
    intro: PropTypes.string
  })
}

export default Hero
