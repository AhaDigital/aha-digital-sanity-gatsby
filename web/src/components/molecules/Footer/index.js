import React from 'react'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { imageUrlFor } from '../../../lib/image-url';
import { buildImageObj } from '../../../lib/helpers';
import InlineTextScentance from '../../atoms/InlineTextScentance'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'
import Grid from '../Grid'
import StyledFooter from './styles'

const Footer = ({ salesPitch, contactPerson, addContrast }) => {
  const email = get(contactPerson, 'email')
  const name = get(contactPerson, 'name')
  const title = get(contactPerson, 'title')
  const phone = get(contactPerson, 'phone')
  const image = get(contactPerson, 'image', {})

  const breakpoints = useBreakpoint()
  return (
    <StyledFooter>
      <Grid tagName="section" maxWidth="default" withPadding>
        <Grid.Unit withGutter size={{sm: 12, lg: 7}} marginTop="lg">
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
        <Grid.Unit withGutter size={{sm: 12, lg: 5}} marginTop="lg">
        <Grid justify="flex-start" flexWrap="nowrap">
          <Grid.Unit withGutter>
            {image && image.asset && (
              <img
                src={imageUrlFor(
                  buildImageObj(image)
                )
                .width(360)
                .height(360)
                .quality(80)
                .auto("format")
                .url()}
                alt={image.alt || ''}
                width="120"
                height="120"
              />
            )}
          </Grid.Unit>
          <Grid.Unit withGutter>
            
            {name && (
              <Heading tagName="h4" displayAs="h3" color="dark" addContrast={addContrast} styles={`margin: 0 0 5px !important;`}>{name}</Heading>
            )}
            {title && (
              <Heading tagName="h5" displayAs="h5" color="darker">{title}</Heading>
            )}
            {
              email && (
                <StyledFooter.ContactAlternative>
                  <Text isParagraph={false}>E-post:</Text>{' '}
                  <a href={`mailto:${email}`}>
                    <Text isParagraph={false}>{email}</Text>
                  </a>
                </StyledFooter.ContactAlternative>
              )
            }
            {
              phone && (
                <StyledFooter.ContactAlternative>
                  <Text isParagraph={false}>Telefon:</Text>{' '}
                  {breakpoints.sm ? (
                    <a href={`tel:${phone}`}>
                      <Text isParagraph={false}>{phone.replace('+46', '0')}</Text>
                    </a>
                    ) : <Text isParagraph={false}>{phone.replace('+46', '0')}</Text>
                  }
                </StyledFooter.ContactAlternative>
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
