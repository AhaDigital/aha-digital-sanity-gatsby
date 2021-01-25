export default {
  name: 'columnsBlockItem',
  type: 'object',
  title: 'Kolumn',
  fields: [
    {
      title: 'Titelrad 1',
      name: 'columnBlockTitle1',
      type: 'string',
    },
    {
      title: 'Titelrad 2',
      name: 'columnBlockTitle2',
      type: 'string',
    },
    {
      title: 'Intro',
      name: 'columnBlockIntro',
      type: 'string',
    },
    {
      title: 'Bild',
      name: 'columnBlockImage',
      type: 'simpleImage',
    },
    {
      title: 'Länk',
      name: 'columnBlockLink',
      type: 'url',
      relativeOnly: true
    },
  ],
  preview: {
    select: {
      title: 'columnBlockTitle1',
    }
  }
}
