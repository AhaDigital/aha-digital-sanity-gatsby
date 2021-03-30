import React from 'react'
import { imageUrlFor } from '../../lib/image-url';
import {buildImageObj} from '../../lib/helpers';

export default ({node, aspectRatio4to3}) => {

  const {asset, is4to3AspectRatio} = node
  if (!node || !asset || !asset._id) { return null }

  const sizes = {
    mobile: {
      w: 960,
      h: 411,
    },
    mobileLarger: {
      w: 768,
      h: 329,
    },
    desktop: {
      w: 640,
      h: 274,
    },
  }

  const sizes4to3 = {
    mobile: {
      w: 480,
      h: 360,
    },
    mobileLarger: {
      w: 768,
      h: 576,
    },
    desktop: {
      w: 640,
      h: 480,
    },
  }

  return (
    <figure>
      <picture>
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcSet={
            imageUrlFor(
              buildImageObj(node)
            )
            .width(aspectRatio4to3 || is4to3AspectRatio ? sizes4to3.desktop.w : sizes.desktop.w)
            .height(aspectRatio4to3 || is4to3AspectRatio ? sizes4to3.desktop.h : sizes.desktop.h)
            .quality(80)
            .auto("format")
            .url()
          }
        />
        <source
          media="(min-width: 480px)"
          srcSet={
            imageUrlFor(
              buildImageObj(node)
            )
            .width(aspectRatio4to3 || is4to3AspectRatio ? sizes4to3.mobileLarger.w : sizes.mobileLarger.w)
            .height(aspectRatio4to3 || is4to3AspectRatio ? sizes4to3.mobileLarger.h : sizes.mobileLarger.h)
            .quality(80)
            .auto("format")
            .url()
          }
        />
        <img
          src={
            imageUrlFor(
              buildImageObj(node)
            )
            .width(aspectRatio4to3 || is4to3AspectRatio ? sizes4to3.mobile.w : sizes.mobile.w)
            .height(aspectRatio4to3 || is4to3AspectRatio ? sizes4to3.mobile.h : sizes.mobile.h)
            .quality(80)
            .auto("format")
            .url()
          }
          style={{maxWidth: '100%'}}
          alt={node.alt || ''}
        />
      </picture>
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
