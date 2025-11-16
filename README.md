# Lovable Next.js Starter

Proyecto moderno construido con **Next.js 14**, **React 18**, **Tailwind CSS** y **Framer Motion**. Incluye una arquitectura inspirada en Lovable, con componentes modulares y animaciones suaves listas para personalizar.

## Características
- Diseño minimalista 2025 con header flotante y hero animado
- Secciones modulares en `/src/sections`
- Utilidades compartidas en `/src/utils`
- Tailwind configurado con paleta personalizada
- Animaciones con Framer Motion

## Requisitos
- Node.js 18+
- npm 9+

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```
Visita `http://localhost:3000` para ver la aplicación.

## Build de producción
```bash
npm run build
npm start
```

## Estructura del proyecto
```
src/
  app/        # Rutas App Router de Next.js
  components/ # Componentes reutilizables (Header, UI, etc.)
  sections/   # Bloques de página modulares
  styles/     # Estilos globales y tokens
  utils/      # Helpers y configuraciones
public/
  assets/     # Texturas, ruido, videos
  icons/      # Íconos en SVG
  images/     # Imágenes optimizadas
```

## Personalización
- Edita los colores y fuentes en `tailwind.config.js`
- Ajusta los contenidos del hero y secciones en `src/sections`
- Añade nuevos componentes en `src/components`

## Licencia
MIT
