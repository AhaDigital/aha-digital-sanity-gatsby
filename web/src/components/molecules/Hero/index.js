import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { imageUrlFor } from '../../../lib/image-url';
import {buildImageObj} from '../../../lib/helpers';
import {Grid, GridColumn} from '../Grid'
import theme from '../../themes'
import Heading from '../../atoms/Heading'
import InlineTextScentance from '../../atoms/InlineTextScentance'
import BubbleLeft from '../../atoms/BubbleLeft'
import BubbleRight from '../../atoms/BubbleRight'
import Breadcrumbs from '../../molecules/Breadcrumbs'

import StyledHero from './styles'

const Hero = ({hero, addContrast, pathname}) => {

  const isLandingPage = pathname !== '/'
  const breakpoints = useBreakpoint()
  const {title, image, heading, intro} = hero
  const sanityImage = get(image, 'asset')
  let finalImage
  if(sanityImage) {
    if(breakpoints.sm) {
      finalImage = imageUrlFor(buildImageObj(image)).width(768).height(475).auto("format").url()
    }
    else if (breakpoints.md) {
      finalImage = imageUrlFor(buildImageObj(image)).width(1440).height(475).auto("format").url()
    } else {
      finalImage = imageUrlFor(buildImageObj(image)).width(1920).height(475).auto("format").url()
    }
  }

  const breadcrumbsNavigation = [
    {
      to: '/',
      text: 'Startsida',
    },
    {
      to: pathname,
      text: title,
      currentPage: true,
    }
  ]

  return (
    <>
      {finalImage && (
        <StyledHero image={finalImage} isLandingPage={isLandingPage}>
          <Grid withPadding maxWidth="default" align="center" justify="center">
            <GridColumn withGutter columnSize={12}>
              <StyledHero.Heading isLandingPage={isLandingPage}>
                {isLandingPage ? (
                  <Breadcrumbs navigation={breadcrumbsNavigation}/>
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
            </GridColumn>
          </Grid>
          {!isLandingPage && (
            <StyledHero.Bubbles>
              <BubbleLeft/>
              <BubbleRight/>
            </StyledHero.Bubbles>
          )}
        </StyledHero>
      )}
      {isLandingPage && (
        <>
          {!finalImage && (
            <Grid tagName="section" withPadding maxWidth="default" marginTop="lg">
              <GridColumn withGutter columnSize={12}>
                <Breadcrumbs navigation={breadcrumbsNavigation}/>
              </GridColumn>  
            </Grid>
          )}
          <Grid tagName="section" withPadding maxWidth="default" marginTop={finalImage ? 'md' : 'xl'}>
            <GridColumn tagName="header" withGutter columnSize={12}>
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
            </GridColumn>
          </Grid>
        </>
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
