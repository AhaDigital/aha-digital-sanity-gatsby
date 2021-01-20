export default {
  name: 'textImageBlock',
  type: 'object',
  title: 'Text och bild',
  fields: [
    {
      title: 'Bild till vänster',
      name: 'BlockImageDirectionLeft',
      type: 'boolean',
      description: 'Bild till höger om inga val görs.',
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
  ]
}
