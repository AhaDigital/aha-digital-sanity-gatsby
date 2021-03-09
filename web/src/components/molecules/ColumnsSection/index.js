import React from 'react'
import Grid from '../Grid'
import Heading from '../../atoms/Heading'
import Figure from '../../atoms/Figure'
import Columns from './styles'

const ColumnsSection = ({ column: columns = [], addContrast }) => {
  const columnWidth = columnsCount => {
    switch(columnsCount) {
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

  const overrideHeadingStyle = `
    position: absolute;
    bottom: 0;
    left: 0;
  `

  return (
    <Columns>
      {
        columns.map(column => {
          const { columnBlockImage = {}, columnBlockIntro, columnBlockLink, columnBlockTitle1, columnBlockTitle2 } = column

          return (
            <Columns.Column key={column._key}>
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
                      <Columns.ColumnHeadingText>{columnBlockTitle1} </Columns.ColumnHeadingText>
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
            </Columns.Column>
          )
        })
      }
    </Columns>
  )
}

export default ColumnsSection
