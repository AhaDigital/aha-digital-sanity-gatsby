export default {
  name: 'listBlock',
  type: 'object',
  title: 'Lista',
  fields: [
    {
      title: 'Listrad',
      name: 'listBlockList',
      type: 'array',
      of:[{
        name: 'listBlockItem',
        type: 'listBlockItem'
      }]
    }
  ],
  preview: {
    select: {
      title: 'listBlockList',
    },
    prepare() {
      return {
        title: 'Lista',
      }
    }
  }
}
