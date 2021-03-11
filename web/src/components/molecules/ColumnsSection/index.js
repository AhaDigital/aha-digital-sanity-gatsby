import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Grid from '../Grid'
import Heading from '../../atoms/Heading'
import Figure from '../../atoms/Figure'
import Columns from './styles'

const ColumnsSection = ({ column: columns = [], addContrast }) => {
  const breakpoints = useBreakpoint()
  
  const columnWidth = () => {
    switch(columns.length) {
      case 2:
        return { sm: 12, md: 6 }
      case 3:
        return { sm: 12, md: 4 }
      case 4:
        return { sm: 12, md: 6, lg: 3 }
      default:
        return { sm: 12 }
    }
  }

  const overrideHeadingStyle = breakpoints.sm ? '' : `
    position: absolute;
    bottom: 0;
    left: 0;
  `

  return (
    <Grid tagName="section" maxWidth="default" marginTop="xl" withPadding>
      {
        columns.map(column => {
          const { columnBlockImage = {}, columnBlockIntro, columnBlockLink, columnBlockTitle1, columnBlockTitle2 } = column

          return (
            <Grid.Unit key={column._key} size={columnWidth()} withGutter marginTop="xl">
              <Columns.ColumnInner>
                {
                  columnBlockLink && (
                    <Columns.ColumnLink to={columnBlockLink}>
                      <span className="visually-hidden">
                        {columnBlockTitle1}
                        {columnBlockTitle2 && columnBlockTitle2}
                      </span>
                    </Columns.ColumnLink>
                  )
                }
                <Columns.ColumnTop>
                  {
                    columnBlockImage && columnBlockImage.asset && (
                      <Figure node={columnBlockImage} />
                    )
                  }
                  {columnBlockTitle1 && (
                    <Heading tagName="h3" addContrast={addContrast} styles={overrideHeadingStyle}>
                      <Columns.ColumnHeadingText>{columnBlockTitle1}</Columns.ColumnHeadingText>
                      {
                        columnBlockTitle2 && (
                          <Columns.ColumnHeadingText>{columnBlockTitle2}</Columns.ColumnHeadingText>
                        )
                      }
                    </Heading>
                  )}
                </Columns.ColumnTop>
                {
                  columnBlockIntro && (
                    <Columns.ColumnBottom>{columnBlockIntro}</Columns.ColumnBottom>
                  )
                }
              </Columns.ColumnInner>
            </Grid.Unit>
          )
        })
      }
    </Grid>
  )
}

export default ColumnsSection
