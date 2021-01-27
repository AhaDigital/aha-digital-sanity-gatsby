export default {
  name: 'mainMenu',
  type: 'object',
  title: 'Meny',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Meny',
      name: 'mainMenuPages',
      type: 'array',
      of:[{
        name: 'mainMenuPage',
        type: 'mainMenuPage'
      }]
    }
  ]
}
