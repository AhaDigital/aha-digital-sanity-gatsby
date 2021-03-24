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
  ]
}
