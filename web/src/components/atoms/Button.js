import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import Icon from './icon'
import theme from '../themes'
import { iconAnimation } from '../../lib/helpers'

const StyledIcon = styled.span`
  margin: 0 ${theme.spacings.md} 0 0;
  align-self: center;
  transition: all ${theme.animationTime.default} ease-in-out;
`

const StyledButton = styled.button`
  max-height: 40px;
  padding: ${theme.spacings.md} ${theme.spacings.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: ${theme.palette.blue};
  color: ${theme.palette.light};
  cursor: pointer;
  font: ${theme.headings.h4};
  line-height: 25px;
  transition: all ${theme.animationTime.default} ease-in-out;

  &:focus, &:hover {
    text-decoration: underline;
    background-color: rgba(${theme.palette.rawRgb.pink}, 1);
    ${StyledIcon} {
      ${({animationDirection}) => animationDirection && css`
        transform: ${iconAnimation(animationDirection)};
      `}
    }
  }
  ${({styles}) => styles && styles}
`

const Button = forwardRef((
  {
    name, 
    type, 
    icon,
    text, 
    ariaLabel, 
    onClick,
    ariaExpanded,
    ariaHaspopup,
    ariaControls,
    styles,
    location
  }, ref) => {
console.log('LOCATION', location)
  const { symbol, animationDirection } = icon

  return (
    <StyledButton
      ref={ref}
      name={name}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded ? 'true' : 'false'}
      aria-haspopup={ariaHaspopup}
      aria-controls={ariaControls}
      animationDirection={animationDirection}
      styles={styles}
    >
      {symbol && (
        <StyledIcon>
          <Icon symbol={symbol} />
        </StyledIcon>
      )}
      <span>{text}</span>
    </StyledButton>
  )
})

Button.defaultProps = {
  type: 'button',
  ref: null,
  icon: {
    symbol: null,
    animationDirection: null,
  },
  onClick: null,
  ariaLabel: null,
  ariaExpanded: null,
  ariaHaspopup: null,
  ariaControls: null,
  styles: null,
}

Button.propTypes = {
  ref: PropTypes.object,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  icon: PropTypes.shape({
    symbol: PropTypes.string,
    animationDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  }),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaHaspopup: PropTypes.bool,
  ariaControls: PropTypes.string,
  styles: PropTypes.string,
}

export default Button
