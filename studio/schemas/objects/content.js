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
          title: 'Textblock',
          name: 'textBlock',
          type: 'textBlock'
        },
        {
          title: 'Text och bildblock',
          name: 'textImageBlock',
          type: 'textImageBlock'
        },
        {
          title: 'Lista',
          name: 'listBlock',
          type: 'listBlock'
        },
        {
          title: 'Text och lista',
          name: 'listContentBlock',
          type: 'listContentBlock'
        },
        {
          title: 'Kolumner',
          name: 'columnsBlock',
          type: 'columnsBlock'
        },
      ]
    }
  ]
}
