import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Link } from 'gatsby'
import Icon from './Icon'
import theme from '../themes'
import { iconAnimation } from '../../lib/helpers'

const StyledIcon = styled.span`
  margin: 0 ${theme.spacings.md} 0 0;
  align-self: center;
  transition: all ${theme.animationTime.default} ease-in-out;
`

const StyledLink = styled(Link)`
  font: ${theme.headings.h3Mobile};
  padding: ${theme.spacings.md} 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  color: ${theme.palette.dark};
  cursor: pointer;
  line-height: auto;
  transition-delay: 1s;
  transition: all ${theme.animationTime.default} ease-in-out;
  transform: translateX(-10px);
  text-decoration: underline;

  ${({isSmall}) => isSmall ? css`
    &:before {
      content: '';
      width: 28px;
      height: 2px;
      display: block;
      margin: 0 ${theme.spacings.md} 0 0;
    }
  ` : css`
    padding: ${theme.spacings.md};
    font: ${theme.headings.h3};
    line-height: 61px;
    text-decoration: none;
  `}

  ${({addContrast}) => addContrast && css`
    color: black;
  `}

  ${({showNav}) => showNav && css`
    transition-delay: ${theme.animationTime.default};
    transform: translateX(0);
  `}

  &:focus, &:hover {
    background-color: transparent;
    ${({addContrast}) => addContrast ? css`
      color: blue;
    ` : css`
      color: ${theme.palette.blue};
    `}

    ${StyledIcon} {
      ${({animationDirection}) => animationDirection && css`
        transform: ${iconAnimation(animationDirection)};
      `}
    }
  }
`


const MenuLinkButton = forwardRef((
  {
    icon,
    ariaLabel, 
    to,
    activeClassName,
    role,
    addContrast,
    children,
    showNav
  }, ref) => {

  const { symbol, animationDirection } = icon
  const breakpoints = useBreakpoint()

  return (
    <StyledLink
      ref={ref}
      role={role}
      to={to}
      activeClassName={activeClassName}
      aria-label={ariaLabel}
      animationDirection={animationDirection}
      addContrast={addContrast}
      isSmall={breakpoints.sm}
      showNav={showNav}
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

MenuLinkButton.defaultProps = {
  ref: null,
  icon: {
    symbol: null,
    animationDirection: null,
  },
  ariaLabel: null,
  role: null,
  activeClassName: null,
  addContrast: false,
  showNav: false
}

MenuLinkButton.propTypes = {
  ref: PropTypes.object,
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  role: PropTypes.string,
  icon: PropTypes.shape({
    symbol: PropTypes.string,
    animationDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  }),
  ariaLabel: PropTypes.string,
  addContrast: PropTypes.bool,
  showNav: PropTypes.bool
}

export default MenuLinkButton
