export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'prices',
      title: 'Prices',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'currency',
              title: 'Currency',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
