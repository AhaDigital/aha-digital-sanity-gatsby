import React from 'react'
import styled, { css } from 'styled-components'
import theme from '../themes'

const Text = styled.span`
  display: block;
  font: ${theme.texts.default};
  color: ${theme.palette.darker};

  ${({theme}) => theme.media.md`
    font: ${theme.texts.sm};
  `}

  ${({asLineBreak}) => asLineBreak && css`
    margin-top: ${theme.spacings.lg};
  `}
`

const SpanBlockText = ({asLineBreak, children}) => (
  <Text asLineBreak={asLineBreak}>{children}</Text>
)

export default SpanBlockText
