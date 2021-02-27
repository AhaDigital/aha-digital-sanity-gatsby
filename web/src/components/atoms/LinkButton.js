import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import { Link } from 'gatsby'
import Icon from './icon'
import theme from '../themes'
import { iconAnimation } from '../../lib/helpers'

const StyledIcon = styled.span`
  margin: 0 ${theme.spacings.md} 0 0;
  align-self: center;
  transition: all ${theme.animationTime.default} ease-in-out;
`

const StyledLink = styled(Link)`
  max-height: 40px;
  padding: ${theme.spacings.md} ${theme.spacings.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  color: ${theme.palette.dark};
  cursor: pointer;
  font: ${theme.headings.h4};
  line-height: 25px;
  transition: all ${theme.animationTime.default} ease-in-out;

  &:focus, &:hover {
    text-decoration: underline;
    background-color: ${theme.palette.pink};
    ${StyledIcon} {
      ${({animationDirection}) => animationDirection && css`
        transform: ${iconAnimation(animationDirection)};
      `}
    }
  }
  ${({styles}) => styles && styles}
`

const LinkButton = forwardRef((
  {
    icon,
    ariaLabel, 
    styles,
    to,
    activeClassName,
    role,
    children
  }, ref) => {

  const { symbol, animationDirection } = icon

  return (
    <StyledLink
      ref={ref}
      role={role}
      to={to}
      activeClassName={activeClassName}
      aria-label={ariaLabel}
      animationDirection={animationDirection}
      styles={styles}
    >
      {symbol && (
        <StyledIcon>
          <Icon symbol={symbol} />
        </StyledIcon>
      )}
      <span>{children}</span>
    </StyledLink>
  )
})

LinkButton.defaultProps = {
  ref: null,
  icon: {
    symbol: null,
    animationDirection: null,
  },
  ariaLabel: null,
  styles: null,
  role: null,
  activeClassName: null,
}

LinkButton.propTypes = {
  ref: PropTypes.object,
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  role: PropTypes.string,
  icon: PropTypes.shape({
    symbol: PropTypes.string,
    animationDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  }),
  ariaLabel: PropTypes.string,
  styles: PropTypes.string,
}

export default LinkButton
