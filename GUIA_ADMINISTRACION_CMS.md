# Guía de Uso y Administración de Contenidos
## V.R.A. Auto Detailing — Plataforma Web & Sanity CMS

Bienvenido al manual de administración de tu sitio web oficial para **V.R.A. Auto Detailing**. 
Esta guía te explica de forma práctica y sencilla cómo gestionar precios, textos, imágenes del "Antes y Después", y servicios adicionales desde tu panel de control en la nube (**Sanity Studio**).

---

## 1. Acceso al Panel de Control (Sanity Studio)

1. Ingresa a la URL de administración de tu proyecto:
   - **URL del Studio:** `https://vra-autodetailing.sanity.studio/` *(o tu enlace local/desplegado)*
   - O mediante el portal de [Sanity.io Manage](https://www.sanity.io/manage) seleccionando el proyecto `vjs9yzly`.
2. Inicia sesión con tu correo electrónico o cuenta de Google vinculada.
3. En el menú de navegación de la izquierda, haz clic en el documento principal: **V.R.A. Auto Detailing**.

> [!TIP]
> Cada vez que realices cambios en cualquier sección, no olvides presionar el botón verde **"Publish"** (Publicar) en la esquina inferior derecha. Los cambios se reflejarán en tu sitio web de forma inmediata.

---

## 2. Modificación de Paquetes y Precios

El sitio web cuenta con 3 paquetes principales conectados directamente con tu panel:
- **Standard Detail** (`key: standard`)
- **Interior Focus** (`key: interior`)
- **Full Detail** (`key: full`)

### Paso a paso para editar un paquete:
1. En el documento de Sanity, desplázate hasta la sección **"Paquetes y precios"** (`packages`).
2. Haz clic sobre el paquete que deseas editar para desplegar sus opciones:
   - **Nombre del paquete (`name`):** Título principal (ejemplo: *Standard Detail*).
   - **Precio desde (`price`):** Escribe únicamente el número base (ejemplo: `120`). La web añadirá automáticamente el signo `$` y la palabra `Starting at`.
   - **Descripción corta (`description`):** Frase explicativa del servicio (ejemplo: *Essential maintenance wash & clean for regular upkeep*).
   - **Duración (`duration`):** Tiempo estimado del trabajo (ejemplo: *1.5 - 2 hrs*).
   - **Etiqueta opcional (`badge`):** Insignia destacada en la parte superior de la tarjeta (ejemplo: `POPULAR`, `BEST VALUE` o déjalo vacío si no aplica).
   - **Características (`sections`):**
     - Puedes desglosar los ítems incluidos (ejemplo: *Exterior Hand Wash*, *Wheels & Tires*, *Interior Vacuum*).
     - Para añadir un ítem nuevo, pulsa **"Add item"**.
     - Para eliminar un ítem, haz clic en los 3 puntos laterales y selecciona **"Delete"**.

> [!WARNING]
> **Identificador (`key`):** No modifiques el campo `key` (`standard`, `interior`, `full`), ya que es el código que conecta la tarjeta visual del diseño con la base de datos de Sanity.

---

## 3. Galería Deslizable "Antes y Después" (Before & After)

La sección de resultados muestra un carrusel dinámico donde los clientes pueden comparar el estado inicial y el acabado final del vehículo.

### Reglas y Proporciones Recomendadas para las Imágenes
Para garantizar que las tarjetas del carrusel se mantengan alineadas, limpias y carguen a máxima velocidad en teléfonos móviles y computadoras:

| Parámetro | Especificación Recomendada |
| :--- | :--- |
| **Proporción de Aspecto** | **3:4 (Vertical)** o **4:3 (Horizontal)** |
| **Resolución Sugerida** | **1080 x 1440 px** (vertical) o **1200 x 900 px** (horizontal) |
| **Formato de Archivo** | **JPG** o **WebP** |
| **Peso Máximo Sugerido** | Menos de **500 KB** por fotografía |
| **Regla de Oro** | **Ambas fotos (Antes y Después) del mismo caso DEBEN tener exactamente el mismo tamaño y orientación.** |

### Cómo subir un nuevo caso de Antes y Después:
1. Ubica el apartado **"Galería antes y después"** (`gallery`).
2. Haz clic en **"Add item"** (Añadir ítem).
3. Verás dos recuadros de carga:
   - **Foto antes (`beforeImage`):** Haz clic en *Upload* y selecciona la foto del vehículo antes del detalle.
   - **Foto después (`afterImage`):** Haz clic en *Upload* y sube la foto del resultado final desde el mismo ángulo.
4. **Punto focal (Hotspot):** Al hacer clic sobre la miniatura de la imagen cargada, puedes arrastrar el círculo de enfoque hacia el área más representativa del trabajo para que nunca se recorte de forma extraña en pantallas pequeñas.
5. Puedes reordenar los casos arrastrándolos verticalmente por el ícono de 6 puntos.
6. Haz clic en el botón verde **"Publish"**.

---

## 4. Servicios Adicionales (Add-ons)

El panel inferior permite ofrecer servicios complementarios para aumentar el valor promedio por servicio.

### Añadir un nuevo Add-on:
1. Ve al bloque **"Add-ons / Servicios adicionales"** (`addOns`).
2. Haz clic en **"Add item"**.
3. Completa los campos:
   - **Título (`title`):** Nombre del servicio (ejemplo: *Engine Bay Detail*, *Ceramic Coating Spray*, *Headlight Restoration*). **(Obligatorio)**
   - **Precio (`price`):** **(Opcional)**. Si lo dejas completamente vacío o en blanco, la web mostrará únicamente el nombre del servicio con diseño de tarjeta limpia sin ningún precio, ideal para presupuestos personalizados o consultas directas. Si en el futuro deseas mostrar un precio, simplemente escribe la tarifa (ejemplo: `$50 - $80`, `$120`, etc.).
4. Haz clic en **"Publish"**.

### Editar o Eliminar un Add-on:
- **Editar:** Pulsa sobre el servicio existente, modifica el título o precio, y publica.
- **Eliminar:** Haz clic en los tres puntos (`...`) junto al título del Add-on y selecciona **"Delete"**.

---

## 5. Ciudades Atendidas y Mensajes de Contacto

- **Ciudades (`cities`):** Puedes gestionar las poblaciones listadas en la sección de cobertura (por defecto: *Acworth*, *Kennesaw*, *Woodstock*). Si te expandes a nuevas zonas (ej. *Marietta*, *Canton*), puedes añadirlas con sus coordenadas geográficas y el mapa las incorporará de forma automática.
- **Mensaje de WhatsApp (`whatsappMessage`):** Texto inicial que recibe el cliente al presionar el botón de WhatsApp desde su teléfono.
- **Redes Sociales:** Actualiza los enlaces a tu página de **Facebook** e **Instagram** cuando lo requieras.

---

## 6. Resumen de Buenas Prácticas

1. **Pruebas en tiempo real:** Tras hacer clic en *Publish*, abre la página web en tu navegador. Si no ves el cambio al instante, refresca con `Ctrl + F5` (o `Cmd + Shift + R` en Mac) para limpiar la caché local.
2. **Fotografía profesional:** Toma las fotos de "Antes" y "Después" con buena iluminación y desde la misma distancia y ángulo; esto aumenta exponencialmente la tasa de conversión y reserva de clientes.
3. **Seguridad:** No compartas tus credenciales de acceso con terceros no autorizados.
