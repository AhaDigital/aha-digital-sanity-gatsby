export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'fallbackSEO',
      type: 'seo',
    },
    {
      name: 'mainMenu',
      type: 'mainMenu'
    }
  ],
}
