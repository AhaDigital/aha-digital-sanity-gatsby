export default {
  name: 'contactPerson',
  type: 'object',
  title: 'Kontaktperson',
  fields: [
    {
      title: 'Namn',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Titel',
      name: 'title',
      type: 'string',
    },
    {
      title: 'E-post',
      name: 'email',
      type: 'string'
    },
    {
      title: 'Telefon',
      name: 'phone',
      type: 'string'
    },
    {
      title: 'Bild',
      name: 'image',
      type: 'simpleImage'
    }
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
}
