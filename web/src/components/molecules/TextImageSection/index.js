import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import get from 'lodash.get'
import Grid from '../Grid'
import PortableText from '../../atoms/portableText'
import Figure from '../../atoms/Figure'
import Heading from '../../atoms/Heading'
import TextContainer from '../../atoms/TextContainer'
import {HeadingWithImage, HeadingAsImage} from './styles'

const TextImageSection = ({ blockImageDirectionLeft, bodyPortableText, mainImage, imageHeading, addContrast, pathname }) => {
  const breakpoints = useBreakpoint()
  const heading = []
  const rest = []
console.log('imageHeading', imageHeading)
  bodyPortableText.forEach(element => {
    const {style} = element

    if(style === 'h2') {
      const H2 = element
      H2.addContrast = addContrast
      heading.push(H2)
    } else {
      rest.push(element)
    }
  })

  const headingText = get(heading[0], 'children[0].text')
  const {is4to3AspectRatio} = mainImage

  let justify = 'flex-start'
  if(breakpoints.md) {
    if(pathname === '/') {
      justify = 'center'
    }
  }

  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl" justify={justify}>
      {
        breakpoints.sm || breakpoints.md ? (
          <>
            <Grid.Unit withGutter size={breakpoints.sm ? 12 : 8}>
              <HeadingWithImage>
                <Figure node={mainImage} aspectRatio4to3={is4to3AspectRatio}/>
                {
                  heading.length > 0 && (
                    <Heading tagName="h2" addContrast={get(heading[0], 'addContrast')} color="pink">
                      {headingText && headingText.split(' ').map((word, index) => <span key={`heading-word-${word}-${index}`}>{word}</span>)}
                    </Heading>
                  )
                }
              </HeadingWithImage>
            </Grid.Unit>
            {imageHeading && imageHeading.asset && (
              <Grid.Unit withGutter size={7} withClearFix={{toLeft: blockImageDirectionLeft}}>
                {imageHeading.alt ? (
                  <HeadingAsImage>
                    <Figure node={imageHeading} />
                    <span className="visually-hidden">{imageHeading.alt}</span>
                  </HeadingAsImage>
                ) : <Figure node={imageHeading} />}
                
              </Grid.Unit>
            )}
            <Grid.Unit withGutter size={breakpoints.sm ? 12 : 8} marginTop="lg">
              <PortableText blocks={rest} />
            </Grid.Unit>
          </>
        ) : (
          <>
            {imageHeading && imageHeading.asset && (
              <Grid.Unit withGutter size={7} withClearFix={{toLeft: blockImageDirectionLeft}}>
                {imageHeading.alt ? (
                  <HeadingAsImage>
                    <Figure node={imageHeading} />
                    <span className="visually-hidden">{imageHeading.alt}</span>
                  </HeadingAsImage>
                ) : <Figure node={imageHeading} />}
                
              </Grid.Unit>
            )}
            {
              heading.length > 0 && (
                <Grid.Unit withGutter size={7} withClearFix={{toLeft: blockImageDirectionLeft}}>
                  <TextContainer>
                    {
                      heading.length > 0 && (
                        <Heading tagName="h2" addContrast={get(heading[0], 'addContrast')} color="pink">
                          {headingText}
                        </Heading>
                      )
                    }
                  </TextContainer>
                </Grid.Unit>
              )
            }
            <Grid.Unit withGutter size={6}>
              <TextContainer>
                {blockImageDirectionLeft ? (
                  <Figure node={mainImage} aspectRatio4to3={is4to3AspectRatio} />
                ) : (
                  <PortableText blocks={rest} />
                )}
              </TextContainer>
            </Grid.Unit>
            <Grid.Unit withGutter size={6}>
              <TextContainer>
                {blockImageDirectionLeft ? (
                  <PortableText blocks={rest} />
                ) : (
                  <Figure node={mainImage} aspectRatio4to3={is4to3AspectRatio} />
                )}
              </TextContainer>
            </Grid.Unit>
          </>
        )
      }
    </Grid>
  )
}

export default TextImageSection
