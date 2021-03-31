export default {
  name: 'mainMenuPage',
  type: 'object',
  title: 'Menu',
  fields: [
    {
      title: 'Sida',
      name: 'page',
      type: 'reference',
      to: [{type: 'pages'}]
    },
    {
      title: 'Extern länk',
      name: 'externalLink',
      type: 'url'
    },
    {
      title: 'Extern länknamn',
      name: 'externalLinkName',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'page.title',
      subtitle: 'externalLinkName',
    }
  }
}
