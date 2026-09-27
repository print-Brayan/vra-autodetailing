import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'V.R.A. Auto Detailing',
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
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'videoItem',
          title: 'Video',
          fields: [
            defineField({name: 'title', title: 'Nombre del video', type: 'string'}),
            defineField({
              name: 'video',
              title: 'Archivo de video',
              type: 'file',
              options: {accept: 'video/*'},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'poster',
              title: 'Imagen de portada (opcional)',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {
            select: {title: 'title', media: 'poster'},
            prepare({title, media}) {
              return {title: title || 'Video', media}
            },
          },
        },
      ],
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
