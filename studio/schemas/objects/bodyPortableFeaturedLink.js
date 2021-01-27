export default {
  name: 'bodyPortableFeaturedLink',
  type: 'object',
  title: 'Länk',
  fields: [
    {
      title: 'Namn',
      name: 'linkName',
      type: 'string',
    },
    {
      title: 'PDF',
      name: 'isPdf',
      type: 'boolean',
      description: 'Markera om länken är en PDF.'
    },
    {
      title: 'Länk',
      name: 'href',
      type: 'url',
      allowRelative: true,
    },
  ]
}
