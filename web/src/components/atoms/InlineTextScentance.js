import React from 'react'
import styled, {css} from 'styled-components'

const Text = styled.span`
  ${({theme, withLineBreak, rollingWord}) => theme && css`
    ${withLineBreak && `
      display: block;
    `}

    ${rollingWord && `
      position: absolute;
    `}
  `}
`

const RollingWordWrapper = styled.span`
  position: relative;
`

const InlineTextScentance = ({ part }) => {
  const { _type, _key, text, withLineBreak } = part

  if(_type === 'inlineTextListItem') {
    return (
      <Text key={_key} withLineBreak={withLineBreak}>{text}</Text>
    )
  } else {
    const { bodyPortableRollingTextWords } = part

    return (
      <RollingWordWrapper>
        {
          bodyPortableRollingTextWords.map( wordObj => {
            return (
              <Text key={wordObj._key} rollingWord={true}>{wordObj.word}</Text>
            )
          })
        }
      </RollingWordWrapper>
    )
  }
}

export default InlineTextScentance
