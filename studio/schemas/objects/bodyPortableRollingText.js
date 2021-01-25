export default {
  name: 'bodyPortableRollingText',
  type: 'object',
  title: 'Rullande text',
  fields: [
    {
      title: 'Ord',
      name: 'bodyPortableRollingTextWords',
      type: 'array',
      of:[{
        name: 'bodyPortableRollingTextWord',
        type: 'bodyPortableRollingTextWord'
      }]
    },
  ],
  preview: {
    select: {
      title: 'bodyPortableRollingTextWords',
    },
    prepare(selection) {
      const { title = {}} = selection
      let rollingWordsPreview = ''

      title.map((words, index) => {
        rollingWordsPreview += `${words.word}${index < title.length -1 ? ' + ' : ''}`
      })
      return {
        title: rollingWordsPreview || 'Rullande text',
      }
    }
  }
}
