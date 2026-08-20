import VideoStudio from '../assets/img/VideoStudio.webp';
import VideoStudioSmall from '../assets/img/VideoStudio-640.webp';
import openAPI from '../assets/img/openAPI.webp';
import openAPISmall from '../assets/img/openAPI-640.webp';

export const perfil = {
	nombre: 'Fernando Espíritu',
	titulo: 'Desarrollador Frontend',
	descripcion: [
		'Soy desarrollador web enfocado en crear interfaces modernas y funcionales. Trabajo principalmente con HTML, CSS, JavaScript, React y TypeScript, utilizando herramientas como Tailwind CSS para construir experiencias rápidas y atractivas. Además, tengo experiencia del lado del backend con Node.js, bases de datos y construcción de APIs REST.',
		'Me gusta aprender constantemente y mejorar mis habilidades, cuidando tanto el diseño como la calidad del código. Busco oportunidades donde pueda aportar soluciones eficientes y seguir creciendo como desarrollador. Actualmente también integro herramientas de IA en mi flujo de trabajo para potenciar la productividad y explorar nuevas formas de resolver problemas.',
	],
	email: 'fere.espiritu@gmail.com',
	telefono: '2288484335',
	avatarAlt: 'Foto de Fernando Espíritu',
};

export const redes = {
	github: 'https://github.com/espiritu1',
	linkedin: 'https://www.linkedin.com/in/fernando-esp%C3%ADritu-372539248/',
};

export const experiencia = [
	{
		puesto: 'Full Stack',
		empresa: 'Dinamo •',
		fecha: '2023 - 2024',
		tecnologias: 'HTML, CSS, JavaScript, jQuery, PHP, Oracle Database, Bootstrap, CVS, Jira',
		descripcion: [
			'Desarrollé una plataforma web interna para gestionar y visualizar videos instructivos, utilizada por múltiples departamentos para estandarizar la capacitación de personal nuevo.',
			'Participé en el desarrollo de un sistema de registro, ingreso y transferencia de personal entre compañías, contribuyendo a unificar los procesos de alta y reubicación de empleados y reduciendo la dependencia de trámites manuales.',
			'Implementé un sistema de gestión de permisos basado en roles (RBAC), permitiendo a los usuarios acceder a distintas aplicaciones con sus mismas credenciales según los permisos asignados a su perfil.',
			'Realicé mantenimiento y actualizaciones a páginas y sistemas internos, incorporando nueva información, modificando funcionalidades y desarrollando opciones para consultar y descargar datos.',
			'Colaboré con el equipo de desarrollo utilizando CVS para control de versiones y Jira/Confluence para seguimiento de tareas bajo metodología ágil.',
		],
	},
];

export const educacion = {
	institucion: 'Universidad Veracruzana',
	carrera: 'Licenciatura en Tecnologías Computacionales',
	periodo: '2020 - 2024',
};

export const proyectos = [
	{
		nombre: 'Video manager React',
		imagen: VideoStudio,
		imagenSmall: VideoStudioSmall,
		descripcion:
			'Panel de administración de videos que permite subir, organizar, buscar y gestionar contenido desde una interfaz moderna y responsiva. Incluye vista previa, miniaturas y un diseño adaptable para dispositivos móviles y escritorio, facilitando la gestión de videos.',
		tecnologias: ['React', 'TypeScript', 'Tailwind'],
		github: 'https://github.com/espiritu1/video-manager-react',
	},
	{
		nombre: 'Video Manager API',
		imagen: openAPI,
		imagenSmall: openAPISmall,
		descripcion:
			'API REST para gestión de videos y categorías desarrollada con Express y PostgreSQL. Validación de datos con Zod, documentación interactiva con OpenAPI/Swagger y manejo de base de datos con Prisma ORM.',
		tecnologias: [
			'Express',
			'Node.js',
			'PostgreSQL',
			'Prisma',
			'Zod',
			'OpenAPI',
		],
		github: 'https://github.com/espiritu1/backend-video-manager-react-ts.git',
	},
];
