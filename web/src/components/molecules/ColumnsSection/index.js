import React from 'react'
import Grid from '../Grid'
import Figure from '../../atoms/Figure'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'

const ColumnsSection = ({ column: columns = [] }) => {
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

  return (
    <Grid tagName="section" maxWidth="default" withPadding marginTop="xxl">
      {
        columns.map(column => {
          const { columnBlockImage = {}, columnBlockIntro, columnBlockLink, columnBlockTitle1, columnBlockTitle2 } = column

          return (
            <Grid.Unit key={column._key} withGutter size={columnWidth(columns.length)}>
              {
                columnBlockImage && columnBlockImage.asset && (
                  <Figure node={columnBlockImage} />
                )
              }
              {columnBlockTitle1 && (
                <Heading tagName="h3">
                  <span>{columnBlockTitle1} </span>
                  {
                    columnBlockTitle2 && (
                      <span>{columnBlockTitle2}</span>
                    )
                  }
                </Heading>
              )}
              {
                columnBlockIntro && (
                  <Text>{columnBlockIntro}</Text>
                )
              }
            </Grid.Unit>
          )
        })
      }
    </Grid>
  )
}

export default ColumnsSection
