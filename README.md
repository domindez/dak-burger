Sitio web estático de DAK Burger migrado a [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).

## Desarrollo

Instala dependencias y ejecuta el entorno local:

```bash
npm install
npm run dev
```

La web quedará disponible en `http://localhost:4321`.

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura principal

- `src/pages`: rutas estáticas (`/`, `/conocenos`, `/retos`, etc.)
- `src/layouts/BaseLayout.astro`: layout global
- `src/components`: componentes compartidos
- `src/styles/global.css`: estilos globales y Tailwind

## Nota

El código original en `src/app` y componentes `.tsx` se puede eliminar una vez valides visualmente que la migración Astro cumple todos los requisitos de diseño/contenido.
