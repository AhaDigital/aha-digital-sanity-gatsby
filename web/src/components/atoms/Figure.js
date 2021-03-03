import React from 'react'
import { imageUrlFor } from '../../lib/image-url';
import {buildImageObj} from '../../lib/helpers';

export default ({node}) => {
  const {asset} = node
  if (!node || !asset || !asset._id) { return null }
  return (
    <figure>
      <picture>
        <source
          type="image/webp"
          media="(min-width: 1008px)"
          srcSet={
            imageUrlFor(buildImageObj(node)).width(1920).height(1080).format('auto').quality(80)
          }
        />
        <source
          media="(min-width: 1008px)"
          srcSet={imageUrlFor(buildImageObj(node))}
        />
        <img
          src={imageUrlFor(buildImageObj(node)).width(1920 / 2).height(1080 / 2).format('auto').quality(80)}
          style={{maxWidth: '100%'}}
          alt={node.alt || ''}
        />
      </picture>
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
