import React from 'react'
import get from 'lodash.get'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { imageUrlFor } from '../../../lib/image-url';
import { buildImageObj } from '../../../lib/helpers';
import InlineTextScentance from '../../atoms/InlineTextScentance'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'
import FeaturedLink from '../../atoms/FeaturedLink'
import {Grid, GridColumn} from '../Grid'
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
        <GridColumn withGutter columnSize={{sm: 12, lg: 7}} marginTop="lg">
          <Heading tagName="h3" displayAs="h1" textColour="green" addContrast={addContrast}>
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
        </GridColumn>
        <GridColumn columnSize={{sm: 12, lg: 5}} marginTop="lg">
          <Grid justify="flex-start" flexWrap="nowrap">
            <GridColumn withGutter>
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
                  width="180"
                  height="180"
                />
              )}
            </GridColumn>
            <GridColumn withGutter>
              
              {name && (
                <Heading tagName="span" displayAs="h3" textColour="dark" addContrast={addContrast} styles={`display: block; margin: 0 0 5px !important;`}>{name}</Heading>
              )}
              {title && (
                <Heading tagName="span" displayAs="h5" textColour="darker" styles={`display: block; margin: 0 0 10px !important;`}>{title}</Heading>
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
            </GridColumn>
          </Grid>
        </GridColumn>
      </Grid>
      <StyledFooter.Bottom>
        <Grid maxWidth="default" withPadding>
          <GridColumn withGutter columnSize={{sm: 12, md: 7}} marginTop="lg">
            <Heading tagName="h3" textColour={addContrast ? 'darker' : 'dark'}>
              Om webbplatsen
            </Heading>
            <nav aria-label="Om webbplatsen">
              <ol>
                <li>
                  <FeaturedLink node={{href: "/webbplatskarta/", linkName: "Webbplatskarta", linkColour: '#000000'}}/>
                </li>
                {
                  footerMenu.map(item => (
                      <li key={item._key}>
                        <FeaturedLink
                          node={{
                            href: item.page ? `/${item.page.slug.current}/` : item.externalLink,
                            linkName: item.page ? item.page.title : item.externalLinkName,
                            linkColour: '#000000'
                          }}
                        />
                      </li>    
                    )
                  )
                }
              </ol>
            </nav>
          </GridColumn>
          <GridColumn withGutter columnSize={{sm: 12, md: 5}} marginTop="lg">
            <Heading tagName="h3" textColour={addContrast || 'dark'}>
              Aha Digital AB
            </Heading>
            <Heading tagName="h2" displayAs="text" textColour="darker">
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
          </GridColumn>
        </Grid>
      </StyledFooter.Bottom>
    </StyledFooter>
  )
}

Footer.defaultProps = {
  salesPitch: []
}

export default Footer
