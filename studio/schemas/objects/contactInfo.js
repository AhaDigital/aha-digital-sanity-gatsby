export default {
  name: 'contactInfo',
  type: 'object',
  title: 'Kontakt',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Kontaktperson',
      name: 'person',
      type: 'array',
      of:[{
        name: 'contactPerson',
        type: 'contactPerson'
      }]
    },
    {
      title: 'Adress',
      name: 'companyAddress',
      type: 'string'
    },
    {
      title: 'Företagsmail',
      name: 'companyEmail',
      type: 'string'
    },
  ]
}
