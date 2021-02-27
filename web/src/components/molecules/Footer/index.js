import React from 'react'
import Grid from '../Grid'
import InlineTextScentance from '../../atoms/InlineTextScentance'
import Heading from '../../atoms/Heading'

const Footer = ({ salesPitch }) => (
  <footer>
    <Grid tagName="section" maxWidth="default" withPadding>
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        {
          salesPitch && salesPitch.length > 0 && (
            <Heading tagName="h3">
              {
                salesPitch.map(part => <InlineTextScentance key={part._key} part={part} />)
              }
            </Heading>
          )
        }
      </Grid.Unit>
      <Grid.Unit withGutter size={{sm: 12, md: 6}}>
        Kontaktinformation...
      </Grid.Unit>
    </Grid>
  </footer>
)

Footer.defaultProps = {
  salesPitch: []
}

export default Footer
