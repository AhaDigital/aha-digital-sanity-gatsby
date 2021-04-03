import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Link } from 'gatsby'
import { imageUrlFor } from '../../../lib/image-url';
import {buildImageObj} from '../../../lib/helpers';
import Grid from '../Grid'
import theme from '../../themes'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'
import InlineTextScentance from '../../atoms/InlineTextScentance'
import BubbleLeft from '../../atoms/BubbleLeft'
import BubbleRight from '../../atoms/BubbleRight'

import StyledHero from './styles'

const Hero = ({hero, addContrast, pathname}) => {

  const isLandingPage = pathname !== '/'
  const breakpoints = useBreakpoint()
  const {title, image, heading, intro} = hero
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
    <>
    <StyledHero image={finalImage} isLandingPage={isLandingPage}>
     <Grid withPadding maxWidth="default" align="center" justify="center">
        <Grid.Unit withGutter size={12}>
          <StyledHero.Heading isLandingPage={isLandingPage}>
            {isLandingPage ? (
              <nav aria-label="breakdcrumbs">
                <StyledHero.Breadcrumbs>
                  <li>
                    <Link to="/">
                      <Text isParagraph={false}>Startsida</Text>
                    </Link>
                    <StyledHero.BreadcrumbsDivider>/</StyledHero.BreadcrumbsDivider>
                  </li>
                  <li>
                    <Link to={pathname} aria-current="page">
                      <Text isParagraph={false}>{title}</Text>
                    </Link>
                  </li>
                </StyledHero.Breadcrumbs>
              </nav>
            ) : (
              <>
                {heading.length > 0 && (
                  <Heading tagName="h1" displayAs="h1" addContrast={addContrast}>
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
              </>
            )}
          </StyledHero.Heading>
        </Grid.Unit>
      </Grid>
      {!isLandingPage && (
        <StyledHero.Bubbles>
          <BubbleLeft/>
          <BubbleRight/>
        </StyledHero.Bubbles>
      )}
    </StyledHero>
      {isLandingPage && (
          <Grid tagName="section" withPadding maxWidth="default" marginTop="md">
            <Grid.Unit tagName="header" withGutter size={12}>
              {heading.length > 0 && (
                  <Heading tagName="h1" displayAs="h1" addContrast={addContrast} styles={`margin: 0 0 10px !important;`}>
                    {
                      heading.map(part => <InlineTextScentance key={part._key} part={part} addContrast={addContrast} />)
                    }
                  </Heading>
                )}
                {intro && (
                  <StyledHero.Intro isLandingPage={isLandingPage}>
                    <Heading tagName="h2" displayAs="text" styles={`color: ${theme.palette.darker}; margin: 0 !important;`}>{intro}</Heading>
                  </StyledHero.Intro>
                )}
            </Grid.Unit>
          </Grid>
        )}
    </>
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
