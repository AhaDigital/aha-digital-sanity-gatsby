import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { imageUrlFor } from '../../../lib/image-url';
import {buildImageObj} from '../../../lib/helpers';
import Grid from '../Grid'
import Heading from '../../atoms/Heading'
import InlineTextScentance from '../../atoms/InlineTextScentance'
import StyledHero from './styles'

const Hero = ({hero, location}) => {
  const breakpoints = useBreakpoint()
  const {image, heading, intro} = hero
  const sanityImage = get(image, 'asset')
  let finalImage

  if(sanityImage) {
    if(breakpoints.sm) {
      finalImage = imageUrlFor(buildImageObj(image)).width(768).height(217).format('auto').quality(80)
    } else {
      finalImage = imageUrlFor(buildImageObj(image)).width(1920).height(355).format('auto').quality(80)
    }
  }
  return (
    <StyledHero image={finalImage}>
     <Grid tagName="section" maxWidth="default" withPadding>
        <Grid.Unit withGutter size={{sm: 12}}>
          {heading.length > 0 && (
            <Heading>
              {
                heading.map(part => <InlineTextScentance key={part._key} part={part} />)
              }
            </Heading>
          )}
          {intro && (
            <Heading tagName="h2" displayAs="text">{intro}</Heading>
          )}
        </Grid.Unit>
      </Grid> 
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
