import React from 'react'
import PropTypes from 'prop-types'
import HeadingElement from './styles'

const Heading = ({id, tagName, displayAs, addContrast, styles, textColour, children}) => {
  if(!addContrast && !textColour) {
    switch(displayAs || tagName) {
      case 'h2':
        textColour = 'pink'
        break;
      case 'h3':
        textColour = 'green'
        break;
      default:
        break;
    }
  }

  return (
    <HeadingElement id={id} as={tagName} displayAs={displayAs} addContrast={addContrast} styles={styles} textColour={textColour}>{children}</HeadingElement>
  )
}

Heading.defaultProps = {
  styles: '',
  id: null,
  addContrast: false,
  textColour: null,
}

Heading.propTypes = {
  id: PropTypes.string,
  tagName: PropTypes.string,
  displayAs: PropTypes.string,
  addContrast: PropTypes.bool,
  styles: PropTypes.string,
  textColour: PropTypes.string,
  children: PropTypes.node.isRequired
}
export default Heading
