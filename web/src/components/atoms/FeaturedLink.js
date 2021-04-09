import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import Icon from './Icon'
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

const StyledFeaturedLinkBlock = styled.span`
  display: block;
`

const StyledIcon = styled.span`
  margin: ${theme.spacings.sm} ${theme.spacings.sm} 0 0;
  display: block;
  transition: all 0.2s ease-in-out;
`

const StyledFeaturedLink = styled.a`
  ${linkStyle}

  ${({linkColour}) => linkColour && css`
    color: ${linkColour};
  `}

  &:focus, &:hover {
    ${StyledIcon} {
      transform: translateX(3px);
    }
  }
`

const StyledFeaturedGatsbyLink = styled(Link)`
  ${linkStyle}
  ${({linkColour}) => linkColour && css`
    color: ${linkColour};
  `}

  &:focus, &:hover {
    ${StyledIcon} {
      transform: translateX(3px);
    }
  }
`

export default ({node}) => {
  const { href, linkName, isPdf, linkColour } = node
  if(!href || !linkName) return null

  return (
    <StyledFeaturedLinkBlock>
      {
        href.indexOf('http') > -1 ? (
          <StyledFeaturedLink href={href} linkColour={linkColour}>
            <StyledIcon>
              <Icon symbol="chevronRight" iconColour={linkColour}/>
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
          <StyledFeaturedGatsbyLink to={href} linkColour={linkColour}>
            <StyledIcon>
              <Icon symbol="chevronRight" iconColour={linkColour}/>
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
    </StyledFeaturedLinkBlock>
  )
}
