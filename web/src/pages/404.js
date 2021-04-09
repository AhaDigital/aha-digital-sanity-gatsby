import React from 'react'
import Text from '../components/atoms/Text'
import FeaturedLink from '../components/atoms/FeaturedLink'
import Grid from '../components/molecules/Grid'
import App from '../app'

const pageSEO = { ogTitle: '404: Sidan finns inte', index: 'noindex'}
  
  const hero = {
    title: '404: Sidan finns inte',
    heading: [{
      text: '404: Sidan finns inte',
      withDecorator: true,
      _key: 'staticHeading',
      _type: 'inlineTextListItem'
    }],
    intro: 'Nä, det här var väl ingen aha-upplevelse!',
    image: {}
  }
const NotFoundPage = (props) => {
  const {location} = props
  return (

    <App pageSEO={pageSEO} location={location} hero={hero}>
      <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
        <Grid.Unit withGutter size={{sm: 12, md: 6}}>
          <Text>Det kan vara så att jag har tagit bort sidan. Kontrollera gärna att det är rättstavat i sökfältet.</Text>
          <FeaturedLink node={{href: "/", linkName: 'Till startsidan'}} />
        </Grid.Unit>
      </Grid>
    </App>
  )
}

export default NotFoundPage
