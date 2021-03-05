import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import theme from '../themes'

const Text = styled.p`
  font: ${theme.texts.sm};
  color: ${theme.palette.darker};
  margin-top: ${theme.spacings.md};
`

const SmallText = ({children}) => (
  <Text>{children}</Text>
)

export default SmallText
