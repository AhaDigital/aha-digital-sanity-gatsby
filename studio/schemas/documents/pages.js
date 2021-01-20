export default {
  name: 'pages',
  type: 'document',
  title: 'Sidor',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title should be catchy, descriptive, and not too long'
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
      options: {
        source: 'title',
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo'
    },
    {
      title: 'Innehåll',
      name: 'content',
      type: 'content',
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      slug: 'slug'
    }
  }
}
