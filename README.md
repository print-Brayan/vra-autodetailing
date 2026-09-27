# V.R.A. Auto Detailing

Landing page premium para un servicio móvil de detailing automotriz.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4c432d40-e605-45e2-9ddf-3558585d312a/deploy-status)](https://app.netlify.com/projects/vra-autodetailing/deploys)

## Overview

V.R.A. Auto Detailing es una marca enfocada en limpieza, restauración y cuidado premium de vehículos con servicio móvil. Este proyecto presenta la identidad visual y el flujo comercial de la marca para captar clientes, mostrar resultados y facilitar reservas por WhatsApp.

## Características principales

- Diseño premium oscuro con branding moderno
- Sección principal con llamada a la acción
- Cómo funciona el servicio
- Galería antes y después con carrusel
- Paquetes y precios
- Área de cobertura
- FAQ
- Enlaces a redes sociales y WhatsApp
- Panel de administración con Decap CMS para gestionar contenido

## Stack

- HTML5
- Tailwind CSS
- JavaScript
- Swiper.js
- Decap CMS
- Netlify
- GitHub

## Estructura

```text
.
├── admin/
│   ├── config.yml
│   └── index.html
├── data/
│   └── galeria.json
├── images/
├── index.html
├── README.md
└── .gitignore
```

## CMS / Admin

El panel administrativo está disponible en:

```text
/admin/
```

Se utiliza Decap CMS conectado con GitHub para permitir subir imágenes y actualizar la galería sin manipular el JSON manualmente.

## Cómo desplegar

1. Conecta este repositorio a Netlify.
2. Asegúrate de que el sitio se publique desde la rama principal.
3. Habilita Netlify Identity y Git Gateway.
4. Abre el panel de administración en `/admin/`.
5. Inicia sesión y gestiona la galería desde el CMS.

## Cómo actualizar la galería

1. Ve al panel administrativo.
2. Abre la colección de galería.
3. Agrega un nuevo caso.
4. Sube la imagen “Antes” y la imagen “Después”.
5. Guarda y publica.
6. La página se actualizará automáticamente.

## Uso local

Puedes abrir el sitio localmente con un servidor estático o con cualquier entorno de desarrollo que prefieras. Si quieres probar el CMS localmente, asegúrate de tener la configuración de Netlify habilitada correctamente.

## Autor

V.R.A. Auto Detailing
