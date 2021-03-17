import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../../themes'

const Columns = {}

const ColumnInner = styled.div`
  height: 100%;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 0;

  ${({theme}) => theme.media.lg`
    margin: 0 ${theme.spacings.md};
  `}
`

const Top = styled.div`
  position: relative;
  overflow: hidden;
  h3 {
    margin-top: 10px;
    ${({theme}) => theme.media.lg`
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0;
    `}
  }
  * {
    transition: all ${theme.animationTime.longer} ease-in-out;
  }
`

const Bottom = styled.p`
  font: ${theme.texts.default};
  color: ${theme.palette.darker};
  margin: ${theme.spacings.lg};
`

const HeadingText = styled.span`
  padding: 0 ${theme.spacings.md} 0 ${theme.spacings.lg};
  display: block;
  background-color: ${theme.palette.light};
  text-decoration: underline;
  ${({theme}) => theme.media.lg`
    padding: 3px ${theme.spacings.md} 3px ${theme.spacings.lg};
    display: inline-block;
    text-decoration: none;
  `}
`

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  &:focus, &:hover {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    top: 4px;
    left: 4px;
    outline-color: ${theme.palette.green} !important;
    & ~ ${Top} {
      figure {
        transform: scale(1.02);
      }
      span {
        ${({theme}) => theme.media.lg`
          color: ${theme.palette.light};
          background-color: ${theme.palette.green};
        `}
      }
    }
  }
`

Columns.ColumnInner = ColumnInner
Columns.ColumnTop = Top
Columns.ColumnBottom = Bottom
Columns.ColumnLink = StyledLink
Columns.ColumnHeadingText = HeadingText

export default Columns
