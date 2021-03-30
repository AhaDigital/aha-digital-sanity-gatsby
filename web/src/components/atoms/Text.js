import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import theme from '../themes'

const StyledText = styled.p`
  font: ${theme.texts.default};
  color: ${theme.palette.darker};
  ${({isParagraph}) => isParagraph && css`
    margin: 0 0 ${theme.spacings.lg} 0;
  `}

  ${({withLineBreak}) => withLineBreak && css`
    display: block;
  `}
`

const Text = ({isParagraph, withLineBreak, children}) => (
  <StyledText as={isParagraph ? 'p' : 'span'} isParagraph={isParagraph} withLineBreak={withLineBreak}>{children}</StyledText>
)

Text.defaultProps = {
  isParagraph: true,
}

Text.propTypes = {
  isParagraph: PropTypes.bool,
  withLineBreak: PropTypes.bool
}

export default Text
