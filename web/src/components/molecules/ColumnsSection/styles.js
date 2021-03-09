import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../../themes'

const Columns = styled.section`
  max-width: ${theme.grid.maxWidth};
  margin: ${theme.spacings.xxl} auto 0;
  padding: 0 ${theme.spacings.lg};

  ${({theme}) => theme.media.md`
    display: table;
    padding: 0 ${theme.spacings.md};
  `}
`

const Column = styled.div`
  padding: 0 ${theme.spacings.lg};
  ${({theme}) => theme.media.md`
    width: 50%;
    display: table-cell;
  `}
`

const ColumnInner = styled.div`
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  position: relative;
  z-index: 0;
  overflow: hidden;
`

const Top = styled.div`
  position: relative;
  span {
    transition: all ${theme.animationTime.default} ease-in-out;
  }
`

const Bottom = styled.p`
  font: ${theme.texts.default};
  color: ${theme.palette.darker};
  margin: ${theme.spacings.md};
`

const HeadingText = styled.span`
  padding: 0 ${theme.spacings.md};
  display: inline-block;
  background-color: ${theme.palette.light};
`

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  &:focus, &:hover {
    & ~ ${Top} span {
      color: ${theme.palette.light};
      background-color: ${theme.palette.blue};
    }
  }
`
Columns.Column = Column
Columns.ColumnInner = ColumnInner
Columns.ColumnTop = Top
Columns.ColumnBottom = Bottom
Columns.ColumnLink = StyledLink
Columns.ColumnHeadingText = HeadingText

export default Columns
