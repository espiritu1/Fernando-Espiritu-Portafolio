
import { ProyectItem } from "./ProyectItem"; 
import VideoStudio from "../../assets/img/VideoStudio.png"
import openAPI from "../../assets/img/openAPI.png"


export const Proyectos = () => {
  return (
	<>
		<section  id="proyectos" className="max-w-6xl  w-[85%]  m-5 mx-auto">
			
			<h2 id="tecnologias-title"
				className="	text-2xl font-bold text-left mb-8 ml-20">
					Proyectos
			</h2>

			<div className="flex flex-wrap justify-center gap-6 border-amber-200">

	<ProyectItem
		nombre="Video manager React"
		imagen={VideoStudio}
		descripcion="Panel de administración de videos que permite subir, organizar, buscar y gestionar contenido desde una interfaz moderna y responsive. Incluye vista previa, miniaturas y un diseño adaptable para dispositivos móviles y escritorio, facilitando la gestión de videos."
		tecnologias={[
			"React",
			"TypeScript",
			"Tailwind"
		]}
		github="https://github.com/espiritu1/video-manager-react"
	/> 


<ProyectItem
	nombre="Video Manager API"
	imagen={openAPI}
	descripcion="API REST para gestión de videos y categorías desarrollada con Express y PostgreSQL. validación de datos con Zod, documentación interactiva con OpenAPI/Swagger y manejo de base de datos con Prisma ORM."
	tecnologias={[
		"Express",
		"Node.js",
		"PostgreSQL",
		"Prisma",
		"Zod",
		"OpenAPI"
	]}
	github="https://github.com/espiritu1/backend-video-manager-react-ts.git"
/>
	
</div>


  		</section>


</>
  );
};


// Ejemplo de uso

/*
import solaire from "../assets/solaire.jpg"

<Proyectos 
  id={1}
  nombre="Mi Proyecto"
  imagen={solaire}
  descripcion="Texto de ejemplo"
/>
*/
