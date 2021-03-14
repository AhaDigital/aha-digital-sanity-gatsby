import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Icon from './icon'
import theme from '../themes'

const linkStyle = `
  margin: ${theme.spacings.md} 0 0;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font: ${theme.texts.default};
  color: ${theme.palette.blue};
  span {
    margin-right: ${theme.spacings.sm};
  }
  &:active {
    color: ${theme.palette.blue};
  }
`

const StyledIcon = styled.span`
  margin: ${theme.spacings.sm} ${theme.spacings.sm} 0 0;
  display: block;
  transition: all 0.2s ease-in-out;
`

const StyledFeaturedLink = styled.a`
  ${linkStyle}

  &:focus, &:hover {
    ${StyledIcon} {
      transform: translateX(3px);
    }
  }
`

const StyledFeaturedGatsbyLink = styled(Link)`
  ${linkStyle}
  &:focus, &:hover {
    ${StyledIcon} {
      transform: translateX(3px);
    }
  }
`

export default ({node}) => {
  const { href, linkName, isPdf } = node
  if(!href || !linkName) return null

  return (
    <div>
      {
        href.indexOf('http') > -1 ? (
          <StyledFeaturedLink href={href}>
            <StyledIcon>
              <Icon symbol="chevronRight"/>
            </StyledIcon>
            <span>
              {linkName}
            </span>
            {
              isPdf && (
                <Icon symbol="pdf"/>
              )
            }
          </StyledFeaturedLink>
        ) : (
          <StyledFeaturedGatsbyLink to={href}>
            <StyledIcon>
              <Icon symbol="chevronRight"/>
            </StyledIcon>
            <span>
              {linkName}
            </span>
            {
              isPdf && (
                <Icon symbol="pdf"/>
              )
            }
          </StyledFeaturedGatsbyLink>
        )
      }
    </div>
  )
}
