export default {
  name: 'mainMenuPage',
  type: 'object',
  title: 'Menu',
  fields: [
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{type: 'pages'}]
    }
  ]
}
