import React from 'react'
import styled from 'styled-components'
import theme from '../themes'

const StyledText = styled.p`
  font: ${theme.texts.default};
  color: ${theme.palette.darker};
  margin: 0 0 ${theme.spacings.lg} 0;
`

const Text = ({children}) => (
  <StyledText>{children}</StyledText>
)

export default Text
