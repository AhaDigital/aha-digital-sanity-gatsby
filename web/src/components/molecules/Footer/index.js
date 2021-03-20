import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Grid from '../Grid'
import InlineTextScentance from '../../atoms/InlineTextScentance'
import Heading from '../../atoms/Heading'
import StyledFooter from './styles'

const Footer = ({ salesPitch, addContrast }) => {
  const breakpoints = useBreakpoint()
  return (
    <StyledFooter>
      <Grid tagName="section" maxWidth="default" withPadding>
        <Grid.Unit withGutter size={{sm: 12, lg: 8}}>
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
        <Grid.Unit withGutter size={{sm: 12, lg: 4}}>
          Kontaktinformation...
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
