export default {
  name: 'textImageBlock',
  type: 'object',
  title: 'Text och bild',
  fields: [
    {
      title: 'Bild till vänster',
      name: 'blockImageDirectionLeft',
      type: 'boolean',
      description: 'Bild till höger om inga val görs.',
    },
    {
      title: 'Bildrubrik',
      name: 'imageHeading',
      type: 'mainImage'
    },
    {
      title: 'Textblock',
      name: 'bodyPortableText',
      type: 'bodyPortableText'
    },
    {
      title: 'Bild',
      name: 'mainImage',
      type: 'mainImage'
    }
  ],
  preview: {
    select: {
      title: 'bodyPortableText',
    },
    prepare() {
      return {
        title: 'Text och bild',
      }
    }
  }
}
