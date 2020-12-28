import styled, { css } from 'styled-components'
import theme from '../../themes'

const unitWidth = (size) => {
  switch (size) {
    case 1:
      return '8.33%'
    case 2:
      return '16.66%'
    case 2.4:
      return '20%'
    case 3:
      return '25%'
    case 4:
      return '33.33%'
    case 5:
      return '41.66%'
    case 6:
      return '50%'
    case 7:
      return '58.33%'
    case 8:
      return '66.66%'
    case 9:
      return '75%'
    case 10:
      return '83.33%'
    case 11:
      return '91.66%'
    case 12:
    default:
      return '100%'
  }
}

const unitSizeMedia = css`
  @media (min-width: 0px) {
    width: ${(props) => unitWidth(props.size.sm)};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    width: ${(props) =>
  props.size.md ? unitWidth(props.size.md) : unitWidth(props.size.md)};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    width: ${(props) =>
  // eslint-disable-next-line no-nested-ternary
  props.size.lg
    ? unitWidth(props.size.lg)
    : props.size.md
    ? unitWidth(props.size.md)
    : unitWidth(props.size.sm)};
  }
`

// Grid outer container wrapping units.
const StyledGrid = styled.div`
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  box-sizing: border-box;
  ${(props) =>
!props.maxWidth &&
css`
      display: flex;
      ${props.withPadding &&
css`
        padding: 0 ${props.theme.sizes.containerPadding};
      `}
      ${props.marginTop &&
css`
          margin-top: ${({ theme }) => theme.verticalSpacing[props.marginTop]};
        `}
    `}
  ${(props) =>
props.justify &&
css`
      justify-content: ${props.justify};
    `}
  ${(props) =>
props.align &&
css`
      align-items: ${props.align};
    `}
`

// Grid inner page wrapper for centered grid content.
const StyledPageWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};

  max-width: ${({ theme, maxWidth }) => {
  if (maxWidth === 'default') {
    return theme.sizes.maxWidth
  }
  if (maxWidth === 'large') {
    return theme.sizes.maxWidthLarge
  }
  if (maxWidth === 'small') {
    return theme.sizes.maxWidthSmall
  }
  return 'auto'
}};
  
  ${({ withPadding, theme }) =>
withPadding &&
css`
      padding: 0 ${theme.sizes.containerPadding};
    `}
  ${({ justify }) =>
justify &&
css`
      justify-content: ${justify};
    `}
  ${({ align }) =>
align &&
css`
      align-items: ${align};
    `}
  ${({ flexWrap }) =>
flexWrap &&
css`
      flex-wrap: ${flexWrap};
    `};
  ${({ marginTop, theme }) =>
marginTop &&
css`
      margin-top: ${theme.verticalSpacing[marginTop]};
    `};
  
`

// Grid unit.
// props.size {number | object} 1-12 columns
// or object {sm: number, md: number: lg: number}
const StyledGridUnit = styled.div`
  box-sizing: border-box;
  ${({ marginTop, theme }) =>
marginTop &&
css`
      margin-top: ${theme.verticalSpacing[marginTop]};
    `};
  ${(props) =>
props.withGutter &&
css`
      padding: 0 ${props.theme.sizes.columnGutter};
    `}

  ${(props) =>
typeof props.size === 'number' && `width: ${unitWidth(props.size)};`}

  ${(props) =>
props.alignText &&
props.alignText !== '' &&
css`
      text-align: ${props.alignText};
    `}


  ${(props) => props.size && typeof props.size === 'object' && unitSizeMedia}

  ${(props) =>
props.flexGrow &&
css`
      flex-grow: ${props.flexGrow};
    `}
`

StyledGrid.PageWrapper = StyledPageWrapper
StyledGrid.GridUnit = StyledGridUnit

export default StyledGrid
