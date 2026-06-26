# Portafolio CV — Fernando Espíritu

Sitio web de portafolio y currículum vitae interactivo, construido con **React 19**, **TypeScript**, **Tailwind CSS 4** y **Vite 8**. Presenta un CV dinámico con secciones de perfil, experiencia, proyectos, tecnologías y contacto.

## Tecnologías

| | |
|---|---|
| **React 19** | UI con componentes funcionales y hooks |
| **TypeScript 5.9** | Tipado estático estricto |
| **Vite 8** | Build tool con SWC para compilación rápida |
| **Tailwind CSS 4** | Estilos utilitarios con tema Kanagawa personalizado |
| **react-icons** | Iconos para UI y redes sociales |
| **react-tooltip** | Tooltips en hover para acciones copiar |
| **Space Grotesk** | Tipografía self-hosted (variable font vía @font-face) |
| **ESLint 9** | Linting con flat config |
| **Bun** / **npm** | Gestión de dependencias y runtime |

## Rendimiento

| Práctica | Implementación |
|----------|---------------|
| **Self-host fonts** | Space Grotesk servido desde `public/fonts/` con `font-display: swap` — sin bloqueo de render |
| **Imágenes WebP** | Todas las imágenes en formato WebP (solaire: 74KB → 18KB) |
| **Responsive images** | `<picture>` con `srcSet` para proyectos — versión 640px en mobile |
| **Code splitting** | `React.lazy` + `Suspense` para secciones below the fold |
| **Lazy loading** | `loading="lazy"` en imágenes de proyectos y avatar secundario |
| **manualChunks** | React / react-dom separados en chunk `vendor` para caching |

## Paleta de colores — Kanagawa

Inspirada en la obra *La Gran Ola de Kanagawa*:

| Token | Hex | Uso |
|---|---|---|
| `kanagawa-bg-dark` | `#16161D` | Fondo más oscuro |
| `kanagawa-bg` | `#1F1F28` | Fondo principal |
| `kanagawa-bg-light` | `#2A2A37` | Fondo elevado |
| `kanagawa-bg-lighter` | `#363646` | Fondo de tarjetas |
| `kanagawa-text-primary` | `#DCD7BA` | Texto principal |
| `kanagawa-text-secondary` | `#C8C093` | Texto secundario |
| `kanagawa-primary` | `#7E9CD8` | Azul (acento principal) |
| `kanagawa-secondary` | `#957FB8` | Púrpura |
| `kanagawa-accent` | `#77bf21` | Verde |
| `kanagawa-highlight` | `#E6C384` | Amarillo / dorado |

Soporta modo oscuro y claro con persistencia en `localStorage`, detección de preferencia del sistema y script anti-flash en `<head>`.

## Características

- **Perfil**: Avatar flippable 3D, nombre, disponibilidad y descripción personal
- **Experiencia laboral**: Detalle de proyectos, tecnologías y logros medibles
- **Proyectos**: Tarjetas con hover overlay, descripción y enlace a GitHub
- **Formación académica**: Educación universitaria
- **Tecnologías**: Carrusel infinito con fade mask e iconos SVG inline
- **Contacto**: Correo (copiar al portapapeles), LinkedIn y WhatsApp
- **Modo oscuro**: Toggle animado con persistencia y detección del sistema
- **Responsive**: Diseño adaptable con menú hamburguesa animado en móvil

## Estructura del proyecto

```
src/
├── components/          UI primitivas reutilizables
│   ├── Avatar/          Avatar flippable 3D (solaire / foto real)
│   ├── BackgroundMesh/  Fondo decorativo animado
│   ├── ButtonDarkMode/  Toggle modo oscuro
│   ├── ContactoItem/    Item de contacto con tooltip copiar
│   ├── ExperienciaItem/ Item de experiencia / educación
│   └── ScrollReveal/    Animación al hacer scroll
│
├── sections/            Secciones de página (atomic design)
│   ├── About/           Hero + nombre + botones CV/GitHub/LinkedIn
│   ├── CardContacto/    Información de contacto
│   ├── Descripcion/     Descripción personal con avatar flippable
│   ├── Disponible/      Badge de disponibilidad + email
│   ├── Estudios/        Formación académica
│   ├── Experiencia/     Experiencia laboral
│   ├── Proyectos/       Tarjetas de proyectos con overlay
│   └── Tecnologias/     Carrusel infinito de tecnologías
│       └── icons/       SVG inline components
│
├── layouts/             Layouts de página
│   ├── MainLayout/      Navbar + main + Footer
│   └── Navbar/          Navegación desktop / móvil con menú hamburguesa
│
├── hooks/               Custom hooks y context
│   ├── useTheme.ts      Hook de acceso al tema
│   ├── ThemeContext.ts   Contexto de tema
│   ├── ThemeProvider.tsx Provider con detección de sistema
│   ├── useInfiniteCarousel.ts  Carrusel infinito para tecnologías
│   └── useScrollReveal.ts      Hook interno de ScrollReveal
│
├── data/
│   └── misDatos.tsx     Datos de perfil, experiencia y proyectos
│
├── types/               (preparado para tipos compartidos)
├── constants/           (preparado para constantes)
├── utils/               (preparado para utilidades)
├── assets/img/          Imágenes optimizadas (WebP)
├── App.tsx              Entry point con lazy sections
├── App.css              Tema Kanagawa + animaciones globales
├── index.css            @font-face Space Grotesk + reset
└── main.tsx             Render root con ThemeProvider
```

## Arquitectura

- **Atomic design**: Componentes atómicos → secciones moleculares → layouts
- **Container-presentational**: `misDatos.tsx` como contenedor de datos, componentes puramente presentacionales
- **Lazy sections**: Cada sección below the fold se carga con `React.lazy` y tiene su propio chunk
- **ScrollReveal**: Animación de entrada con IntersectionObserver por sección
- **Carrusel infinito**: `useInfiniteCarousel` con desplazamiento continuo y fade mask en los bordes

## Personalización

Todo el contenido editable está en un solo archivo:

```ts
src/data/misDatos.tsx  // nombre, descripción, experiencia, proyectos, redes
```

Para cambiar colores, editá las variables CSS en `src/App.css` bajo `@theme`.

## Instalación

```bash
git clone <url-del-repositorio>
cd cv

# Con bun (recomendado)
bun install

# O con npm
npm install
```

## Uso

```bash
# Desarrollo
bun run dev            # npm run dev

# Producción
bun run build          # npm run build

# Preview local del build
bun run preview        # npm run preview

# Linting
bun run lint           # npm run lint
```

El servidor de desarrollo inicia en `http://localhost:5173`.

El build de producción se genera en `dist/`.

## Licencia

Proyecto privado — sin licencia pública.
