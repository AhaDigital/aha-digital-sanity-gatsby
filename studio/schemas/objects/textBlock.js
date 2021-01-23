export default {
  name: 'textBlock',
  type: 'object',
  title: 'Text',
  fields: [
    {
      title: 'Vänsterställt block',
      name: 'BlockDirectionLeft',
      type: 'boolean',
      description: 'Centrerat block om inga val görs.',
    },
    {
      title: 'Textblock',
      name: 'bodyPortableText',
      type: 'bodyPortableText'
    }
  ],
  preview: {
    select: {
      title: 'bodyPortableText',
    },
    prepare() {
      return {
        title: 'TextBlock',
      }
    }
  }
}
