export default {
  name: 'simpleImage',
  type: 'image',
  title: 'Bild',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativ text',
      description: 'Bra för SEO och tillgänglighet',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
}
