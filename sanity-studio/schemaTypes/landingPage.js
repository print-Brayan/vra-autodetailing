import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Título principal',
      type: 'string',
      initialValue: 'PREMIUM MOBILE AUTO CARE',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo principal',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen principal',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'gallery',
      title: 'Galería antes y después',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryCase',
          title: 'Caso de éxito',
          fields: [
            defineField({name: 'beforeImage', title: 'Foto antes', type: 'image', options: {hotspot: true}}),
            defineField({name: 'afterImage', title: 'Foto después', type: 'image', options: {hotspot: true}}),
          ],
          preview: {
            select: {before: 'beforeImage', after: 'afterImage'},
            prepare({before, after}) {
              return {title: 'Caso de éxito', media: after || before}
            },
          },
        },
      ],
    }),
    defineField({
      name: 'serviceAreaDescription',
      title: 'Descripción del área de servicio',
      type: 'text',
      rows: 2,
      initialValue: 'We are a 100% mobile detailing service, proudly serving the greater metro Atlanta area.',
    }),
    defineField({
      name: 'cities',
      title: 'Ciudades atendidas',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'city',
          fields: [
            defineField({name: 'name', title: 'Nombre', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'latitude', title: 'Latitud', type: 'number'}),
            defineField({name: 'longitude', title: 'Longitud', type: 'number'}),
          ],
          preview: {select: {title: 'name'}},
        },
      ],
    }),
    defineField({name: 'facebookUrl', title: 'URL de Facebook', type: 'url'}),
    defineField({name: 'instagramUrl', title: 'URL de Instagram', type: 'url'}),
  ],
})
