import styled, { css } from 'styled-components'

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
    width: ${({size}) => unitWidth(size.sm)};
  }
  @media (min-width: ${({theme}) => theme.breakpoints.md}px) {
    width: ${({size}) =>
  size.md ? unitWidth(size.md) : unitWidth(size.md)};
  }
  @media (min-width: ${({theme}) => theme.breakpoints.lg}px) {
    width: ${({size}) =>
  // eslint-disable-next-line no-nested-ternary
  size.lg
    ? unitWidth(size.lg)
    : size.md
    ? unitWidth(size.md)
    : unitWidth(size.sm)};
  }
`

// Grid outer container wrapping units.
const StyledGrid = styled.div`
  width: 100%;
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  box-sizing: border-box;
  ${({maxWidth, withPadding, marginTop, theme}) =>
    !maxWidth && css`
      display: flex;
      ${withPadding && css`
        padding: 0 ${theme.grid.containerPadding};
      `}
      ${marginTop && css`
        margin-top: ${theme.spacings[marginTop]};
      `}
    `}
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `}
  ${({align}) => align && css`
    align-items: ${align};
  `}
`

// Grid inner page wrapper for centered grid content.
const StyledPageWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};

  max-width: ${({ theme, maxWidth }) => {
  if (maxWidth === 'default') {
    return theme.grid.maxWidth
  }
  return '100%'
}};
  
  ${({ withPadding, theme }) =>
    withPadding && css`
      padding: 0 ${theme.grid.containerPadding};

      ${({theme}) => theme.media.md`
        padding: 0 ${theme.grid.containerPaddingDesktop};
      `}
    `}
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `}
  ${({ align }) => align && css`
    align-items: ${align};
  `}
  ${({ flexWrap }) => flexWrap && css`
    flex-wrap: ${flexWrap};
  `};
  ${({ marginTop, theme }) => marginTop && css`
    margin-top: ${theme.spacings[marginTop]};
  `};
  
`

// Grid unit.
// props.size {number | object} 1-12 columns
// or object {sm: number, md: number: lg: number}
// withClearFix at the moment only supported on size 6.
const StyledGridUnit = styled.div`
  box-sizing: border-box;
  ${({ marginTop, theme }) => marginTop && css`
    margin-top: ${theme.spacings[marginTop]};
  `};
  ${({withGutter, theme}) => withGutter && css`
    padding: 0 ${theme.grid.columnGutter};
  `}

  ${({size}) => typeof size === 'number' && css`
    width: ${unitWidth(size)};
  `}

  ${({withClearFix}) => withClearFix && css`

    ${({theme}) => theme.media.md`
      ${withClearFix.toLeft ? 'margin-left: 50%;' : 'margin-right: 50%;'}
    `}
  `}

  ${({alignText}) => alignText && alignText !== '' && css`
    text-align: ${alignText};
  `}


  ${({size}) => size && typeof size === 'object' && unitSizeMedia}

  ${({flexGrow}) => flexGrow && css`
    flex-grow: ${flexGrow};
  `}
`

StyledGrid.PageWrapper = StyledPageWrapper
StyledGrid.GridUnit = StyledGridUnit

export default StyledGrid
