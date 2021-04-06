import React from 'react'
import styled, {css} from 'styled-components'
import theme from '../themes'

const StyledList = styled.ul`
  list-style: initial;
  margin: ${theme.spacings.md} 0 ${theme.spacings.lg} ${theme.spacings.lg};
  li {
    font: ${theme.texts.default};
    color: ${theme.palette.darker};
  }
  ul {
    list-style: circle;
  }
`

const List = ({tagName, children}) => {

  return (
    <StyledList as={tagName}>
      {children}
    </StyledList>
  )
}

export default List
