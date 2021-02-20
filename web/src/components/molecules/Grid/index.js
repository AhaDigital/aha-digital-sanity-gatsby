import React from 'react'
import PropTypes from 'prop-types'
import StyledGrid from './styles'

const Grid = ({
    tagName,
    maxWidth,
    withPadding,
    justify,
    align,
    flexWrap,
    className,
    children,
    marginTop
  }) => {
  return (
    <StyledGrid
      as={tagName}
      maxWidth={maxWidth}
      withPadding={withPadding}
      justify={!maxWidth && justify}
      align={!maxWidth && align}
      flexWrap={!maxWidth && flexWrap}
      className={className}
      marginTop={marginTop && typeof marginTop === 'boolean' ? 'md' : marginTop}
    >
      {maxWidth ? (
        <StyledGrid.PageWrapper
          maxWidth={maxWidth}
          withPadding={withPadding}
          justify={justify}
          align={align}
          flexWrap={flexWrap}
          marginTop={marginTop && typeof marginTop === 'boolean' ? 'md' : marginTop}
        >
          {children}
        </StyledGrid.PageWrapper>
      ) : (
        children
      )}
    </StyledGrid>
  )
}

const Unit = ({
    tagName,
    size,
    withGutter,
    flexGrow,
    children,
    alignText,
    className,
    marginTop,
  }) => {
  return (
    <StyledGrid.GridUnit
      as={tagName}
      size={size}
      withGutter={withGutter}
      flexGrow={flexGrow}
      alignText={alignText}
      className={className}
      marginTop={marginTop && typeof marginTop === 'boolean' ? 'sm' : marginTop}
    >
      {children}
    </StyledGrid.GridUnit>
  )
}

export { Unit }

Grid.Unit = Unit

Grid.propTypes = {
  // Override div with another html tag.
  tagName: PropTypes.string,
  // Add centered page wrapper
  maxWidth: PropTypes.oneOf(['default', 'large', 'small']),
  // Add padding on left and right side.
  withPadding: PropTypes.bool,
  // Flex value for css justify-content.
  justify: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // Flex value for css align-items.
  align: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  flexWrap: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  marginTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])]),
}

Grid.defaultProps = {
  tagName: 'div',
  maxWidth: undefined,
  withPadding: false,
  justify: false,
  align: false,
  flexWrap: false,
  className: '',
  marginTop: null,
}

Unit.propTypes = {
  tagName: PropTypes.string,
  // Size number between 1-12.
  size: PropTypes.oneOfType([
    PropTypes.shape({
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
    }),
    PropTypes.number,
  ]),
  withGutter: PropTypes.bool,
  flexGrow: PropTypes.number,
  children: PropTypes.any.isRequired,
  alignText: PropTypes.string,
  className: PropTypes.string,
  marginTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])]),
}

Unit.defaultProps = {
  tagName: 'div',
  size: null,
  withGutter: false,
  flexGrow: 0,
  alignText: '',
  className: '',
  marginTop: null,
}

export default Grid
