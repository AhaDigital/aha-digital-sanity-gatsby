export default {
  name: 'inlineTextListItem',
  type: 'object',
  title: 'Textsnutt',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      description: 'Del av meningen.'
    },
    {
      title: 'Visa som understruken text',
      name: 'withDecorator',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'text',
    }
  }
}
