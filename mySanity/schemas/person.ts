export default {
  name: 'person',
  title: 'person',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full name',
      type: 'string',
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
