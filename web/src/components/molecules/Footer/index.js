import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { imageUrlFor } from '../../../lib/image-url';
import { buildImageObj } from '../../../lib/helpers';
import InlineTextScentance from '../../atoms/InlineTextScentance'
import Heading from '../../atoms/Heading'
import Grid from '../Grid'
import StyledFooter from './styles'

const Footer = ({ salesPitch, contactPerson, addContrast }) => {
  console.log(contactPerson, addContrast)
  const {email, name, title, phone, image} = contactPerson
  const breakpoints = useBreakpoint()
  return (
    <StyledFooter>
      <Grid tagName="section" maxWidth="default" withPadding>
        <Grid.Unit withGutter size={{sm: 12, lg: 7}}>
          {
            salesPitch && salesPitch.length > 0 && (
              <Heading tagName="h3" displayAs="h1" addContrast={addContrast} color="green">
                {
                  salesPitch.map((part, index) => {
                    if(breakpoints.sm && salesPitch[index +1] && salesPitch[index +1]._type !== 'inlineTextListItem') {
                      part.withLineBreak = true
                    }
                    return <InlineTextScentance key={part._key} part={part}/>
                  })
                }
              </Heading>
            )
          }
        </Grid.Unit>
        <Grid.Unit withGutter size={{sm: 12, lg: 5}}>
        <Grid justify="flex-start" flexWrap="nowrap">
          <Grid.Unit withGutter>
            {image && image.asset && (
              <img
                src={imageUrlFor(
                  buildImageObj(image)
                )
                .width(120)
                .height(120)
                .quality(80)
                .auto("format")
                .url()}
                alt={image.alt || ''}
              />
            )}
          </Grid.Unit>
          <Grid.Unit withGutter>
            
            {name && (
              <Heading tagName="h4" addContrast={addContrast}>{name}</Heading>
            )}
            {title && (
              <Heading tagName="h5" color="darker">{title}</Heading>
            )}
            {
              email && (
                <span>
                  E-post: <a href={`mailto:${email}`}>{email}</a>
                </span>
              )
            }
            {
              phone && (
                <span>
                  Telefon: <a href={`tel:${phone}`}>{phone.replace('+46', '0')}</a>
                </span>
              )
            }
          </Grid.Unit>
          </Grid>
        </Grid.Unit>
      </Grid>
      <StyledFooter.Bottom>
        <Grid tagName="section" maxWidth="default" withPadding>
          <Grid.Unit withGutter size={{sm: 12, md: 6}}>
            <Heading tagName="h3">
              Om webbplatsen
            </Heading>
            <ul>
              <li>
                Webbplatskarta
              </li>
              <li>
                Tillgänglighetsredogörelse
              </li>
              <li>
                Om kakor på webbplatsen
              </li>
              <li>
                Aha på Github
              </li>
            </ul>
          </Grid.Unit>
          <Grid.Unit withGutter size={{sm: 12, md: 6}}>
            aha logo black
            &copy; {new Date().getFullYear()} ahadigital.se - Aha Digital AB
          </Grid.Unit>
        </Grid>
      </StyledFooter.Bottom>
    </StyledFooter>
  )
}

Footer.defaultProps = {
  salesPitch: []
}

export default Footer
