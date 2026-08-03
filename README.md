# Mi Página Personal

Sitio web personal hecho con **React + Vite**, sin backend, sin base de datos
y sin autenticación. Ideal como proyecto de práctica universitaria.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Luego abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

## Estructura del proyecto

```
src/
├── assets/images/   # Imágenes (placeholders para reemplazar)
├── components/      # Un componente por sección de la página
├── data/             # Contenido editable (timeline, datos curiosos, galería)
├── styles/           # Un archivo CSS por componente + variables globales
├── App.jsx           # Ordena las secciones de la página
└── main.jsx          # Punto de entrada de React
```

## Cómo personalizarlo

1. **Textos e imágenes de cada sección**: edita directamente el componente
   correspondiente en `src/components/`.
2. **Línea de tiempo, datos curiosos y galería**: edita los archivos en
   `src/data/` (son simples arreglos de JavaScript, no requieren tocar el
   diseño).
3. **Fotografías**: todas las imágenes actuales son placeholders en formato
   `.svg` dentro de `src/assets/images/`. Cada una tiene un comentario en el
   código indicando dónde reemplazarla por tu propia foto (`.jpg` o `.png`).
4. **Colores y tipografía**: cambia las variables en
   `src/styles/variables.css` para ajustar toda la paleta desde un solo lugar.

## Tecnologías utilizadas

- React (componentes funcionales + hooks)
- Vite
- CSS puro (sin frameworks como Tailwind o Bootstrap)
