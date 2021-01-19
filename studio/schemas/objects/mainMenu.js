export default {
  name: 'mainMenu',
  type: 'object',
  title: 'Main menu',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'mainMenuPages',
      type: 'array',
      of:[{
        name: 'mainMenuPage',
        type: 'mainMenuPage'
      }]
    }
  ]
}
