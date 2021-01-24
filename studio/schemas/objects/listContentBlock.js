export default {
  name: 'listContentBlock',
  type: 'object',
  title: 'Text och lista',
  fields: [
    {
      title: 'lista till vänster',
      name: 'listContentDirectionLeft',
      type: 'boolean',
      description: 'lista till höger om inga val görs.',
    },
    {
      title: 'Textblock',
      name: 'bodyPortableText',
      type: 'bodyPortableText'
    },
    {
      title: 'Lista',
      name: 'listBlock',
      type: 'listBlock'
    }
  ],
  preview: {
    select: {
      title: 'bodyPortableText',
    },
    prepare() {
      return {
        title: 'Text och lista',
      }
    }
  }
}
