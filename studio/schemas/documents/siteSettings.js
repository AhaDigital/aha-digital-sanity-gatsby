export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Inställningar',
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
  preview: {
    prepare() {
      return {
        title: 'Inställningar',
      }
    }
  }
}
