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
      name: 'whatsappMessage',
      title: 'Mensaje predeterminado de WhatsApp',
      type: 'text',
      rows: 3,
      initialValue: 'Hi! 👋🏻 Thank you for contacting VRA Auto Detailing.\nWe’d be happy to help you with a quote.\nWhat vehicle’s year, make & model?',
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
      name: 'packages',
      title: 'Paquetes y precios',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'servicePackage',
          title: 'Paquete de servicio',
          fields: [
            defineField({name: 'key', title: 'Identificador', type: 'string', description: 'Usa standard, interior o full para conectar esta tarjeta.'}),
            defineField({name: 'name', title: 'Nombre del paquete', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'description', title: 'Descripción corta', type: 'string'}),
            defineField({name: 'price', title: 'Precio desde', type: 'number', validation: (rule) => rule.min(0)}),
            defineField({name: 'duration', title: 'Duración', type: 'string'}),
            defineField({name: 'badge', title: 'Etiqueta opcional', type: 'string', description: 'Ejemplo: POPULAR o BEST VALUE'}),
            defineField({
              name: 'sections',
              title: 'Características',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'featureSection',
                  fields: [
                    defineField({name: 'title', title: 'Título de sección', type: 'string'}),
                    defineField({name: 'items', title: 'Características', type: 'array', of: [{type: 'string'}]}),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'price'},
            prepare({title, subtitle}) {
              return {title: title || 'Paquete', subtitle: subtitle ? `$${subtitle}` : 'Sin precio'}
            },
          },
        },
      ],
    }),
    defineField({
      name: 'addOns',
      title: 'Add-ons / Servicios adicionales',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'addOn',
          title: 'Servicio adicional',
          fields: [
            defineField({name: 'title', title: 'Título', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'price', title: 'Precio', type: 'string', validation: (rule) => rule.required()}),
          ],
          preview: {select: {title: 'title', subtitle: 'price'}},
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
