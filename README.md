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
| **ESLint 9** | Linting con flat config |
| **Bun** / **npm** | Gestión de dependencias |

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

- **Perfil**: Avatar, nombre, disponibilidad y descripción personal
- **Experiencia laboral**: Línea de tiempo con detalle de proyectos y tecnologías
- **Proyectos**: Tarjetas con hover overlay, descripción y enlace a GitHub
- **Formación académica**: Educación universitaria
- **Tecnologías**: Iconos SVG inline de tecnologías dominadas
- **Contacto**: Correo (copiar al portapapeles), LinkedIn y WhatsApp
- **Modo oscuro**: Toggle animado con persistencia
- **Responsive**: Diseño adaptable con menú hamburguesa en móvil

## Estructura del proyecto

```
src/
├── components/          UI primitivas reutilizables
│   ├── Avatar/
│   ├── ButtonDarkMode/
│   ├── ContactoItem/
│   ├── ExperienciaItem/
│   └── ToolTip/
│
├── sections/            Secciones de página
│   ├── About/           Hero + botones CV/GitHub/LinkedIn
│   ├── CardContacto/    Información de contacto
│   ├── Descripcion/     Descripción personal
│   ├── Disponible/      Badge de disponibilidad
│   ├── Estudios/        Formación académica
│   ├── Experiencia/     Línea de tiempo laboral
│   ├── Proyectos/       Tarjetas de proyectos
│   └── Tecnologias/     Iconos de tecnologías
│       └── icons/       SVG inline components
│
├── layouts/             Layouts de página
│   ├── MainLayout/      Navbar + main + Footer
│   └── Navbar/          Navegación desktop / móvil
│
├── hooks/               Custom hooks y context
│   ├── useTheme.ts
│   ├── ThemeContext.ts
│   └── ThemeProvider.tsx
│
├── types/               (preparado para tipos compartidos)
├── constants/           (preparado para constantes)
├── utils/               (preparado para utilidades)
├── assets/              Imágenes y CV descargable
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Instalación

```bash
git clone <url-del-repositorio>
cd cv

# Con bun
bun install

# O con npm
npm install
```

## Uso

```bash
# Desarrollo
bun run dev          # npm run dev

# Producción
bun run build        # npm run build

# Preview
bun run preview      # npm run preview

# Linting
bun run lint         # npm run lint
```

El servidor de desarrollo inicia en `http://localhost:5173`.

## Licencia

Proyecto privado — sin licencia pública.
