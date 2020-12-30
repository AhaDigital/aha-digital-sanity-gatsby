export default {
  name: 'services',
  type: 'document',
  title: 'Tjänster',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'intro',
      type: 'string',
      title: 'Intro',
      description: 'Short description as h2 and open graph description.'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
}
