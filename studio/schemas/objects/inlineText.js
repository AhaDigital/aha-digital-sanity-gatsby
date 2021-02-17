export default {
  name: 'inlineText',
  type: 'object',
  title: 'Text med markeringar',
  fields: [
    {
      title: 'Textsnuttar',
      name: 'inlineTextList',
      type: 'array',
      of:[{
        name: 'inlineTextListItem',
        type: 'inlineTextListItem'
      }, {
        name: 'bodyPortableRollingText',
        type: 'bodyPortableRollingText',
      }]
    }
  ]
}
