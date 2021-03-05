import React from 'react'
import styled from 'styled-components'
import theme from '../themes'

const StyledText = styled.p`
  font: ${theme.texts.default};
  color: ${theme.palette.darker};
  margin-top: ${theme.spacings.md};
`

const Text = ({children}) => (
  <StyledText>{children}</StyledText>
)

export default Text
