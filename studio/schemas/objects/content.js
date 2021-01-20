export default {
  name: 'content',
  type: 'object',
  title: 'Content',
  fields: [
    {
      title: 'Blocktyp',
      name: 'contentBlockType',
      type: 'array',
      of:[
        {
          name: 'textBlock',
          type: 'textBlock'
        },
        {
          name: 'textImageBlock',
          type: 'textImageBlock'
        }
      ]
    }
  ]
}
