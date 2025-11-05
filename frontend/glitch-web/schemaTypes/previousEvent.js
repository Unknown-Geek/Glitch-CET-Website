export default {
  name: 'previousEvent',
  title: 'Previous Event',
  type: 'document',
  fields: [
    { name: 'id', title: 'ID', type: 'number' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subTitle', title: 'Subtitle', type: 'string' },
    { name: 'description1', title: 'Description 1', type: 'text' },
    { name: 'description2', title: 'Description 2', type: 'text' },
    { name: 'day', title: 'Day', type: 'string' },
    { name: 'month', title: 'Month', type: 'string' },
    { name: 'image', title: 'Event Image', type: 'image', options: { hotspot: true } },
  ],
};
