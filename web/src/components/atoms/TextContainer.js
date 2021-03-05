import React from 'react'
import styled, {css} from 'styled-components'

const Container = styled.div`
  ${({withPadding, margin, theme}) => theme && css`
    ${withPadding && `padding: 0 ${theme.grid.columnGutter};`}
    ${margin && `margin-${margin.marginDirection}: ${theme.spacings[margin.marginSize]};`}
  `}
`

const TextContainer = ({withPadding, margin, children}) => (
  <Container withPadding={withPadding} margin={margin}>
    {children}
  </Container>
)

export default TextContainer
