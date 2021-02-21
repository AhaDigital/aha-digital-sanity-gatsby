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
  background-color: transparent;
  color: ${theme.palette.dark};
  cursor: pointer;
  font: ${theme.headings.h4};
  transition: all ${theme.animationTime.default} ease-in-out;
  ${({styles}) => styles && styles}
  &:focus, &:hover {
    text-decoration: underline;
    color: ${theme.palette.blue};
    ${({iconId}) => iconId && css`
      .${iconId} {
        fill: #1F69FF;
      }
    `}
    ${StyledIcon} {
      ${({animationDirection}) => animationDirection && css`
        transform: ${iconAnimation(animationDirection)};
      `}
    }
  }
`

const TransparentButton = forwardRef((
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
  }, ref) => {

  const { symbol, animationDirection } = icon

  return (
    <StyledButton
      ref={ref}
      name={name}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      aria-controls={ariaControls}
      animationDirection={animationDirection}
      iconId={symbol}
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

TransparentButton.defaultProps = {
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
  styles: ''
}

TransparentButton.propTypes = {
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

export default TransparentButton
