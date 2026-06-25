import VideoStudio from '../assets/img/VideoStudio.webp';
import VideoStudioSmall from '../assets/img/VideoStudio-640.webp';
import openAPI from '../assets/img/openAPI.webp';
import openAPISmall from '../assets/img/openAPI-640.webp';

export const perfil = {
	nombre: 'Fernando Espíritu',
	titulo: 'Desarrollador Frontend',
	descripcion: [
		'Soy desarrollador web enfocado en la creación de interfaces modernas y funcionales. Trabajo principalmente con HTML, CSS, JavaScript, React y TypeScript, utilizando herramientas como Tailwind CSS para construir experiencias rápidas y atractivas. Aunque mi perfil es frontend, también tengo experiencia desarrollando del lado del backend con Node.js, bases de datos y construcción de APIs REST.',
		'Me gusta aprender constantemente y mejorar mis habilidades, cuidando tanto el diseño como la calidad del código. Busco oportunidades donde pueda aportar soluciones eficientes y seguir creciendo como desarrollador. Actualmente también integro herramientas de IA generativa en mi flujo de trabajo para potenciar la productividad y explorar nuevas formas de resolver problemas.',
	],
	email: 'fere.espiritu@gmail.com',
	telefono: '2288484335',
	avatarAlt: 'Foto de Fernando Espíritu',
};

export const redes = {
	github: 'https://github.com/espiritu1',
	linkedin: 'https://www.linkedin.com/in/fernando-espiritu-372539248/',
};

export const experiencia = [
	{
		puesto: 'Full Stack',
		empresa: 'Dinamo •',
		fecha: '2023 - 2024',
		tecnologias: 'HTML, CSS, JavaScript, jQuery, PHP, Oracle, Bootstrap, CVS, Jira',
		descripcion: [
			'Desarrollé una plataforma web interna para gestión y visualización de videos instructivos, utilizada por múltiples departamentos para estandarizar la capacitación de personal nuevo.',
			'Construí un sistema de registro, ingreso y transferencia de personal entre compañías, unificando los procesos de alta y reubicación de empleados y reduciendo la dependencia de trámites manuales.',
			'Implementé un módulo de asignación y gestión de permisos basado en roles (RBAC), controlando el acceso a distintas áreas del sistema según el perfil del usuario.',
			'Colaboré con el equipo de desarrollo utilizando CVS para control de versiones y Jira/Confluence para seguimiento de tareas bajo metodología ágil.',
		],
	},
];

export const educacion = {
	institucion: 'Universidad Veracruzana',
	carrera: 'Licenciatura en Tecnologías Computacionales',
	periodo: '2018 - 2022',
};

export const proyectos = [
	{
		nombre: 'Video manager React',
		imagen: VideoStudio,
		imagenSmall: VideoStudioSmall,
		descripcion:
			'Panel de administración de videos que permite subir, organizar, buscar y gestionar contenido desde una interfaz moderna y responsive. Incluye vista previa, miniaturas y un diseño adaptable para dispositivos móviles y escritorio, facilitando la gestión de videos.',
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
