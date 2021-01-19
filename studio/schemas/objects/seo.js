export default {
  name: 'seo',
  type: 'object',
  title: 'SEO',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
  },
  fields: [
    {
      name: 'ogTitle',
      type: 'string',
      title: 'Open Graph Title',
    },
    {
      name: 'ogDescription',
      type: 'string',
      title: 'Open Graph Description',
    },
    {
      name: 'ogImage',
      type: 'mainImage',
    }
  ]
}
