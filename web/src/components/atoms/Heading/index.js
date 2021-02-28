import React from 'react'
import PropTypes from 'prop-types'
import HeadingElement from './styles'

const Heading = ({id, tagName, displayAs, styles, children}) => (
  <HeadingElement id={id} as={tagName} displayAs={displayAs} styles={styles}>{children}</HeadingElement>
)

Heading.defaultProps = {
  styles: null,
  id: null,
}

Heading.propTypes = {
  id: PropTypes.string,
  tagName: PropTypes.string,
  displayAs: PropTypes.string,
  styles: PropTypes.string,
  children: PropTypes.node.isRequired
}
export default Heading
