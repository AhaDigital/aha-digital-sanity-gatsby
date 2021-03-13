import React from 'react'
import PropTypes from 'prop-types'
import HeadingElement from './styles'
import theme from '../../themes'

const Heading = ({id, tagName, displayAs, addContrast, styles, children}) => {
  let color
  if(!addContrast) {
    switch(displayAs || tagName) {
      case 'h2':
        color = `color: ${theme.palette.pink} !important;`
        break;
      case 'h3':
        color = `color: ${theme.palette.green} !important;`
        break;
      default:
        break;
    }
  }

  return (
    <HeadingElement id={id} as={tagName} displayAs={displayAs} addContrast={addContrast} styles={styles} color={color}>{children}</HeadingElement>
  )
}

Heading.defaultProps = {
  styles: '',
  id: null,
  addContrast: false,
}

Heading.propTypes = {
  id: PropTypes.string,
  tagName: PropTypes.string,
  displayAs: PropTypes.string,
  addContrast: PropTypes.bool,
  styles: PropTypes.string,
  children: PropTypes.node.isRequired
}
export default Heading
