import React from 'react'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { imageUrlFor } from '../../../lib/image-url';
import { buildImageObj } from '../../../lib/helpers';
import InlineTextScentance from '../../atoms/InlineTextScentance'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'
import FeaturedLink from '../../atoms/FeaturedLink'
import Grid from '../Grid'
import StyledFooter from './styles'

const Footer = ({data, addContrast}) => {
  const salesPitchRollingText = get(data, 'footer.salesPitch', [])
  const salesPitchTextList = get(data, 'footer.salesPitch.inlineTextList', [])

  const contactPerson = get(data, 'footer.contactPerson', {})
  const footerMenu = get(data, 'mainMenuPages', [])
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
            salesPitchRollingText.length > 0 || salesPitchTextList.length > 0 && (
              <Heading tagName="h3" displayAs="h1" color="green" addContrast={addContrast}>
                {
                  salesPitchRollingText.length > 0 && salesPitchRollingText.map((part, index) => {
                    if(breakpoints.sm && salesPitchRollingText[index +1] && salesPitchRollingText[index +1]._type !== 'inlineTextListItem') {
                      part.withLineBreak = true
                    }
                    return <InlineTextScentance key={part._key} part={part} addContrast={addContrast}/>
                  })
                }
                {
                  salesPitchTextList.length > 0 && salesPitchTextList.map((part, index) => {
                    if(breakpoints.sm && salesPitchTextList[index +1] && salesPitchTextList[index +1]._type !== 'inlineTextListItem') {
                      part.withLineBreak = true
                    }
                    return <InlineTextScentance key={part._key} part={part} addContrast={addContrast}/>
                  })
                }
              </Heading>
            )
          }
        </Grid.Unit>
        <Grid.Unit size={{sm: 12, lg: 5}} marginTop="lg">
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
        <Grid maxWidth="default" withPadding>
          <Grid.Unit withGutter size={{sm: 12, md: 7}} marginTop="lg">
            <Heading tagName="h3" color={addContrast ? 'darker' : 'dark'}>
              Om webbplatsen
            </Heading>
            <nav aria-label="Om webbplatsen">
              <ol>
                <li>
                  <FeaturedLink node={{href: "/webbplatskarta/", linkName: "Webbplatskarta", color: '#000000'}}/>
                </li>
                {
                  footerMenu.map(item => (
                      <li key={item._key}>
                        <FeaturedLink
                          node={{
                            href: item.page ? `/${item.page.slug.current}/` : item.externalLink,
                            linkName: item.page ? item.page.title : item.externalLinkName,
                            color: '#000000'
                          }}
                        />
                      </li>    
                    )
                  )
                }
              </ol>
            </nav>
          </Grid.Unit>
          <Grid.Unit withGutter size={{sm: 12, md: 5}} marginTop="lg">
            <Heading tagName="h3" color={addContrast || 'dark'}>
              Aha Digital AB
            </Heading>
            <Heading tagName="h2" displayAs="text" color="darker">
              <Text isParagraph={false} withLineBreak>
                IT-konsult inom digital tillgänglighet,
              </Text>
              <Text isParagraph={false} withLineBreak>
                wcag, universell utforming och
              </Text>
              <Text isParagraph={false} withLineBreak>
                frontend-utveckling.
              </Text>
            </Heading>
            <Text>
              <Text isParagraph={false} withLineBreak>
                Aha Digital AB
              </Text>
              <Text isParagraph={false} withLineBreak>
                Bergsunds Strand 13
              </Text>
              <Text isParagraph={false} withLineBreak>
                117 38 Stockholm
              </Text>
            </Text>
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
