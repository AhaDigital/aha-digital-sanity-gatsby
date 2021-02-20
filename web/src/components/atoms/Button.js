import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from './icon'
import theme from '../themes'

const StyledButton = styled.button`
  height: 40px;
  padding: 0 ${theme.spacings.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: ${theme.palette.blue};
  color: ${theme.palette.light};
  cursor: pointer;
  font: ${theme.headings.h4};
  transition: all 0.2s ease-in-out;

  &:focus, &:hover {
    background-color: rgba(${theme.palette.rawRgb.pink}, 1);
    text-decoration: underline;
  }
`

const StyledIcon = styled.span`
  margin-right: ${theme.spacings.md};
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
  }, ref) => {
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
    >
      {icon && (
        <StyledIcon>
          <Icon symbol={icon} />
        </StyledIcon>
      )}
      <span>{text}</span>
    </StyledButton>
  )
})

Button.defaultProps = {
  type: 'button',
  ref: null,
  icon: null,
  onClick: null,
  ariaLabel: null,
  ariaExpanded: null,
  ariaHaspopup: null,
  ariaControls: null,
}

Button.propTypes = {
  ref: PropTypes.object,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaHaspopup: PropTypes.bool,
  ariaControls: PropTypes.string,

}

export default Button
