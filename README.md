# V.R.A. Auto Detailing

Landing page premium y panel de gestión de contenido para **V.R.A. Auto Detailing**, servicio móvil especializado de detailing automotriz con base en Acworth, GA, atendiendo Kennesaw, Woodstock y el área metropolitana de Atlanta.

El sitio es estático, optimizado para alto rendimiento y consume su contenido dinámicamente desde Sanity CMS con almacenamiento en caché local para una carga instantánea (0ms).

---

## Características

- **Diseño Móvil First**: Interfaz visual moderna, oscura y responsiva construida con Tailwind CSS y tipografías optimizadas (*Montserrat*, *Oswald*, *Bebas Neue*).
- **Contenido Dinámico con Sanity CMS**: Títulos, galería antes/después, paquetes, precios, add-ons y descripciones administrables en tiempo real.
- **Cero Parpadeo (0ms Cache)**: Hidratación local inmediata con fallback garantizado que previene saltos o pantallas en blanco.
- **Canales de Reserva Integrados**: Enlaces directos a llamada telefónica, SMS, WhatsApp y correo electrónico nativo adaptados automáticamente según el dispositivo.
- **Área de Cobertura Interactiva**: Mapa interactivo con diseño oscuro y marcadores de ciudades principales (Acworth, Kennesaw, Woodstock).
- **Página 404 Personalizada**: Manejo estilizado de rutas no encontradas.

---

## Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend** | HTML5 semántico, JavaScript Vanilla ES6+, Tailwind CSS |
| **Librerías UI** | Swiper.js (carrusel antes/después), Leaflet (mapa de cobertura) |
| **Headless CMS** | Sanity Studio v3 (`@sanity/cli`, esquemas estructurados) |
| **Hosting & CDN** | Cloudflare Pages |
| **Control de Versiones** | Git / GitHub |

---

## Estructura del Proyecto

```text
.
├── images/                # Logotipos y recursos gráficos locales
├── sanity-studio/         # Panel de administración y schemas de Sanity CMS
│   ├── schemaTypes/       # Definición de tipos de datos y campos
│   ├── sanity.cli.js      # Configuración de CLI de Sanity
│   ├── sanity.config.js   # Configuración del panel de Sanity Studio
│   └── package.json       # Dependencias de Sanity Studio
├── 404.html               # Página personalizada para rutas no encontradas
├── index.html             # Landing page principal
├── README.md              # Documentación del proyecto
└── .gitignore             # Archivos excluidos del control de versiones
```

---

## Desarrollo Local

### 1. Landing Page
Para previsualizar la web localmente, ejecuta cualquier servidor estático en la raíz del proyecto:

```powershell
npx serve .
```

O utilizando la extensión Live Server de VS Code.

### 2. Sanity Studio
Para ejecutar el panel de administración localmente:

```powershell
cd sanity-studio
npm install
npm run dev
```

El panel estará disponible en la URL local indicada por el comando (por defecto `http://localhost:3333`).

---

## Despliegue

- **Landing Page**: Desplegada de forma continua a través de Cloudflare. Cada actualización en la rama principal (`main`) se refleja en producción.
- **Sanity Studio**: El panel de edición se publica en la nube mediante el CLI de Sanity:
  ```powershell
  cd sanity-studio
  npm run deploy
  ```

---

## Seguridad y Buenas Prácticas

- **Sin exposición de secretos**: El repositorio no contiene credenciales privadas, tokens de escritura ni variables de entorno sensibles.
- **Sanitización de URLs**: Todas las fuentes dinámicas consumidas desde Sanity (imágenes, videos y redes sociales) se validan contra protocolos seguros `https:` y orígenes autorizados antes de renderizarse en el DOM.
- **Canales de contacto seguros**: La web no recopila ni almacena números de tarjetas de crédito o contraseñas en bases de datos vulnerables; las reservas y cotizaciones se gestionan directamente a través de canales de mensajería del cliente.

---

## Licencia y Derechos

© 2026 V.R.A. Auto Detailing. Todos los derechos reservados.
Sitio web oficial: [vra-autodetailing.com](https://vra-autodetailing.com)
