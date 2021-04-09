import React from 'react'
import {Grid, GridColumn} from '../Grid'
import Heading from '../../atoms/Heading'
import Figure from '../../atoms/Figure'
import Columns from './styles'

const ColumnsSection = ({ column: columns = [], addContrast }) => {
  
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

  return (
    <Grid tagName="section" maxWidth="default" marginTop="xl" withPadding>
      {
        columns.map(column => {
          const { columnBlockImage = {}, columnBlockIntro, columnBlockLink, columnBlockTitle1, columnBlockTitle2 } = column

          return (
            <GridColumn key={column._key} columnSize={columnWidth()} withGutter marginTop="xl">
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
                    <Heading tagName="h3" displayAs="h2" addContrast={addContrast} textColour="green">
                      <Columns.ColumnHeadingText>{columnBlockTitle1}</Columns.ColumnHeadingText>
                      {
                        columnBlockTitle2 && (
                          <Columns.ColumnHeadingText isLast>{columnBlockTitle2}</Columns.ColumnHeadingText>
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
            </GridColumn>
          )
        })
      }
    </Grid>
  )
}

export default ColumnsSection
