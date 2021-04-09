import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import Icon from './Icon'
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
  &:focus, &:hover {
    text-decoration: underline;
    color: ${({addContrast}) => addContrast ? 'blue' : theme.palette.blue};
    ${({iconId, addContrast}) => iconId && css`
      .${iconId} {
        fill: ${addContrast ? '#0000ff' : '#1F69FF'};
      }
    `}
    ${StyledIcon} {
      ${({animationDirection}) => animationDirection && css`
        transform: ${iconAnimation(animationDirection)};
      `}
    }
  }
  ${({overrideStyles}) => overrideStyles && css`
    ${overrideStyles}
  `}
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
    overrideStyles,
    addContrast
  }, ref) => {

  const { symbol, animationDirection } = icon

  return (
    <StyledButton
      className="transparentButton"
      ref={ref}
      name={name}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded ? 'true' : 'false'}
      aria-haspopup={ariaHaspopup}
      aria-controls={ariaControls}
      animationDirection={animationDirection}
      iconId={symbol}
      overrideStyles={overrideStyles}
      addContrast={addContrast}
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
  overrideStyles: null,
  addContrast: false,
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
  overrideStyles: PropTypes.string,
  addContrast: PropTypes.bool,
}

export default TransparentButton
