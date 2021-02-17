import React from 'react'

const InlineTextScentance = ({ part }) => {
  const { _type, _key, text, withLineBreak } = part
 console.log('PT',part)
  if(_type === 'inlineTextListItem') {
    return (
      <span key={_key}>{text}</span>
    )
  } else {
    const { bodyPortableRollingTextWords } = part

    return bodyPortableRollingTextWords.map( wordObj => {
      return (
        <span key={wordObj._key}>{wordObj.word}</span>
      )
    })
  }
}

export default InlineTextScentance
