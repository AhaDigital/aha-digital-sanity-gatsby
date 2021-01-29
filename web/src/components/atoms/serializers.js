import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    mainImage: Figure,
    bodyPortableFeaturedLink: ({node}) => <span>...bodyPortableFeaturedLink...</span>
  }
}

export default serializers
