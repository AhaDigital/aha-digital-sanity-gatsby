import React from 'react'
import styled from 'styled-components'
import theme from '../themes'

const Text = styled.p`
  font: ${theme.texts.sm};
  color: ${theme.palette.darker};
  margin: 0 0 ${theme.spacings.xl} 0;
`

const SmallText = ({children}) => (
  <Text>{children}</Text>
)

export default SmallText
