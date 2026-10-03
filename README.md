# V.R.A. Auto Detailing

Landing page premium para el servicio móvil de detailing automotriz de V.R.A. La web es estática y consume el contenido publicado desde Sanity.

## Características

- Diseño responsive con Tailwind CSS y Montserrat.
- Hero con video administrable desde Sanity.
- Galería antes y después cargada exclusivamente desde Sanity.
- Paquetes, precios, descripciones y características editables desde Sanity.
- Área de servicio con mapa y ciudades enlazadas.
- Reservas por Gmail en computadora y SMS en teléfonos.
- WhatsApp, Facebook, Instagram y correo en el footer.
- Menú responsive para móviles.

## Stack

- HTML5 y JavaScript vanilla
- Tailwind CSS vía CDN
- Swiper.js
- Sanity Studio
- Cloudflare Workers
- GitHub

## Estructura

```text
.
├── admin/                 # Configuración heredada de Decap CMS
├── images/                # Logo local del sitio
├── sanity-studio/         # Panel y schema de Sanity
│   ├── schemaTypes/
│   ├── package.json
│   ├── sanity.cli.js
│   └── sanity.config.js
├── index.html             # Landing page
├── README.md
└── .gitignore
```

## Sanity

Proyecto: `vjs9yzly`
Dataset: `production`
Studio publicado: `https://vra-autodetailing.sanity.studio/`
Web principal: `https://vra-autodetailing.com/`
Web temporal: `https://vra-autodetailing.brayanmartinez1020.workers.dev/`

El documento principal se llama **V.R.A. Auto Detailing**. Desde allí se pueden administrar:

- título y subtítulo del hero
- imagen y videos del hero
- galería antes y después
- paquetes, precios, duración y características
- descripción del área de servicio y ciudades
- enlaces de Facebook e Instagram

### Ejecutar el Studio localmente

```powershell
cd sanity-studio
npm install
npm run dev
```

### Desplegar el Studio

Requiere una cuenta con permisos de administrador o developer en el proyecto:

```powershell
cd sanity-studio
npx sanity login
npm run deploy
```

El cliente solo necesita entrar al Studio publicado con su cuenta invitada como **Editor**. No necesita acceso a GitHub, Cloudflare ni al código.

## Paquetes y precios

En Sanity, dentro de **Paquetes y precios**, usa estas claves para conectar las tarjetas existentes:

```text
standard
interior
full
```

Cada paquete permite editar nombre, descripción, precio, duración, etiqueta y secciones de características. Al publicar, la landing consulta Sanity automáticamente.

## Desarrollo y publicación de la web

La web principal se publica desde la rama `main`. Para probarla localmente, usa cualquier servidor estático, por ejemplo:

```powershell
npx serve .
```

Después de publicar cambios en GitHub, Cloudflare realiza el despliegue automático en la cuenta que administra el dominio actual. Para evitar caché, recarga con `Ctrl + F5`.

## CORS de Sanity

El dominio principal registrado en CORS es:

```text
https://vra-autodetailing.com
```

El dominio temporal también está autorizado como respaldo. Para desarrollo local, agrega el origen del servidor utilizado, por ejemplo `http://localhost:3000`.

Sanity ya tiene ambos dominios registrados en **API > CORS origins**. El dominio personalizado aún requiere que el DNS de Cloudflare esté activo.

## Autor

V.R.A. Auto Detailing
