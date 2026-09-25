import VideoStudio from '../assets/img/VideoStudio.webp';
import VideoStudioSmall from '../assets/img/VideoStudio-640.webp';
import openAPI from '../assets/img/openAPI.webp';
import openAPISmall from '../assets/img/openAPI-640.webp';
import Sengled from '../assets/img/Sengled.webp';
import SengledSmall from '../assets/img/Sengled-640.webp';
import SengledOpciones from '../assets/img/SengledOpciones.webp';
import SengledOpcionesSmall from '../assets/img/SengledOpciones-640.webp';

export const perfil = {
	nombre: 'Fernando Espíritu',
	titulo: 'Desarrollador Frontend',
	descripcion: [
		'Soy desarrollador full-stack especializado en React y TypeScript, con más de un año de experiencia construyendo aplicaciones web completas: interfaces modernas con HTML, CSS, JavaScript y Tailwind CSS del lado del frontend, y APIs REST con Node.js sobre bases de datos relacionales (Oracle, MySQL) del lado del backend.',
		'En mi flujo de trabajo integro agentes de código con IA para analizar, generar y refactorizar código de forma más rápida, manteniendo siempre el control total de las decisiones técnicas.',
		'Con formación en Tecnologías Computacionales y experiencia trabajando bajo metodologías ágiles con Jira y Confluence, busco oportunidades donde pueda aportar soluciones eficientes, aprendiendo constantemente y cuidando tanto el diseño como la calidad del código.',
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
		tecnologias: 'JavaScript, HTML, CSS, PHP, jQuery, Bootstrap, Oracle Database, CVS, Jira',
		descripcion: [
			'Desarrollé una plataforma web para subir y visualizar videos de capacitación, utilizada para formar al personal de las 6 empresas del grupo, estandarizando la preparación de nuevos empleados.',
			'Contribuí al desarrollo de un sistema de gestión de personal que centralizó el registro, actualización de datos y cambios de empresa, reduciendo la dependencia de procesos manuales.',
			'Di soporte y realicé mejoras al módulo existente de gestión de permisos basado en roles (RBAC), permitiendo a los usuarios acceder a información de distintas empresas del grupo con las mismas credenciales y perfil, sin generar registros duplicados.',
			'Realicé mantenimiento y actualizaciones a los sistemas internos según los requerimientos: corregí errores, incorporé nueva información y desarrollé opciones de consulta y descarga de datos, permitiendo al área de RH revisar reportes de pagos y pendientes.',
			'Colaboré con el equipo de desarrollo utilizando CVS para el control de versiones y Jira/Confluence para el seguimiento de tareas bajo metodología ágil.',
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
	{
		nombre: 'Sengled Bulb Controller',
		imagen: Sengled,
		imagenSmall: SengledSmall,
		imagenSecundaria: SengledOpciones,
		imagenSecundariaSmall: SengledOpcionesSmall,
		descripcion:
			'App nativa de Android para controlar los focos Sengled descontinuados por la empresa. Creada al quedar sin soporte, controla los focos por UDP local, sin nube ni cuentas: encender, apagar, ajustar brillo y programar rutinas diarias por foco. Cuenta con un broker MQTT local con TLS que mantiene los focos siempre conectados, sin depender de servicios externos.',
		tecnologias: ['Kotlin', 'Android', 'MQTT', 'Protocolo UDP'],
		github: 'https://github.com/espiritu1/sengled-local-control',
	},
];
