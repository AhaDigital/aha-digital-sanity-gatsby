export default {
  name: 'columnsBlock',
  type: 'object',
  title: 'Kolumner',
  fields: [
    {
      title: 'Kolumn',
      name: 'column',
      type: 'array',
      of:[{
        name: 'columnsBlockItem',
        type: 'columnsBlockItem'
      }]
    }
  ],
  preview: {
    select: {
      title: 'column',
    },
    prepare() {
      return {
        title: 'Kolumner',
      }
    }
  }
}
