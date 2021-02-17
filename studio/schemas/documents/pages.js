export default {
  name: 'pages',
  type: 'document',
  title: 'Sidor',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titel för menyn',
    },
    {
      name: 'pageH1',
      type: 'inlineText',
      title: 'H1',
      description: 'Catchy men inte för lång',
    },
    {
      name: 'intro',
      type: 'string',
      title: 'Intro',
      description: 'H2 och för open graph description.',
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
      title: 'Huvudbild'
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    },
    {
      title: 'Innehåll',
      name: 'content',
      type: 'content',
    },
    {
      title: 'Säljpitch',
      name: 'salesPitchBlock',
      type: 'inlineText'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      slug: 'slug',
    }
  }
}
