import VideoStudio from '../assets/img/VideoStudio.webp';
import openAPI from '../assets/img/openAPI.webp';

export const perfil = {
	nombre: 'Fernando Espíritu',
	titulo: 'Desarrollador Frontend',
	descripcion: [
		'Soy desarrollador web enfocado en la creación de interfaces modernas y funcionales. Trabajo principalmente con HTML, CSS, JavaScript, React y TypeScript, utilizando herramientas como Tailwind CSS para construir experiencias rápidas y atractivas.',
		'Me gusta aprender constantemente y mejorar mis habilidades, cuidando tanto el diseño como la calidad del código. Busco oportunidades donde pueda aportar soluciones eficientes y seguir creciendo como desarrollador.',
		'Actualmente estoy aprendiendo arquitectura',
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
		empresa: 'Dinamo  •',
		fecha: '2022 - 2023',
		tecnologias:
			'HTML, CSS, JavaScript, Jquery, PHP, Oracle Database, Bootstrap, Subversion',
		descripcion: [
			'Desarrollé una plataforma web interna para la gestión y visualización de videos instructivos, facilitando la capacitación y estandarización de procesos del personal.',
			'Colaboré en el desarrollo de un sistema web para el registro e ingreso de nuevo personal.',
			'Implementé mejoras en el sistema de autenticación (login), centralizando el acceso del personal a las plataformas internas. Participé en la creación de un módulo de asignación y gestión de permisos para controlar el acceso de usuarios a través de perfilados. Contribuí en mejorar la organización y accesibilidad de la información de usuarios.',
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
		descripcion:
			'Panel de administración de videos que permite subir, organizar, buscar y gestionar contenido desde una interfaz moderna y responsive. Incluye vista previa, miniaturas y un diseño adaptable para dispositivos móviles y escritorio, facilitando la gestión de videos.',
		tecnologias: ['React', 'TypeScript', 'Tailwind'],
		github: 'https://github.com/espiritu1/video-manager-react',
	},
	{
		nombre: 'Video Manager API',
		imagen: openAPI,
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
