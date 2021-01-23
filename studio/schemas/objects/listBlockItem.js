export default {
  name: 'listBlockItem',
  type: 'object',
  title: 'Listrad',
  fields: [
    {
      title: 'Titel',
      name: 'listBlockTitle',
      type: 'string',
      description: 'Titel för den klickbara listraden.'
    },
    {
      title: 'Textblock',
      name: 'bodyPortableText',
      type: 'bodyPortableText',
    },
  ],
  preview: {
    select: {
      title: 'listBlockTitle',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title,
      }
    }
  }
}
