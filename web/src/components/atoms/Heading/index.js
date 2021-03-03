import React from 'react'
import PropTypes from 'prop-types'
import HeadingElement from './styles'

const Heading = ({id, tagName, displayAs, addContrast, styles, children}) => (
  <HeadingElement id={id} as={tagName} displayAs={displayAs} addContrast={addContrast} styles={styles}>{children}</HeadingElement>
)

Heading.defaultProps = {
  styles: null,
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
