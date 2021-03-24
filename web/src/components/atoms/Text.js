import React from 'react'
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

export default Text
