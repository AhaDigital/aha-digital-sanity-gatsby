import React from 'react'
import styled from 'styled-components'
import theme from '../themes'

const Text = styled.p`
  font: ${theme.texts.sm};
  color: ${theme.palette.darker};
  margin: ${theme.spacings.sm} 0 ${theme.spacings.lg};
`

const SmallText = ({children}) => (
  <Text>{children}</Text>
)

export default SmallText
