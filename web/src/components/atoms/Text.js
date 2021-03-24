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
`

const Text = ({isParagraph, children}) => (
  <StyledText as={isParagraph ? 'p' : 'span'} isParagraph={isParagraph}>{children}</StyledText>
)

Text.defaultProps = {
  isParagraph: true,
}

Text.propTypes = {
  isParagraph: PropTypes.bool
}

export default Text
