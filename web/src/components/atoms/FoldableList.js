import React from 'react'
import PortableText from './portableText'

const FoldableList = ({list = []}) => {
  return (
    <ul>
      {
        list.map(listItem => {
          const { listBlockTitle, bodyPortableText } = listItem
          return (
            <li key={listItem._key}>
              <button>{listBlockTitle}</button>
              <div>
                <PortableText blocks={bodyPortableText} />
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default FoldableList
