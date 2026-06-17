export interface Props {
  nombre: string
  imagen: string
  descripcion: string
  tecnologias: string[]
  github: string
}

export const ProyectItem = ({ nombre, imagen, descripcion, tecnologias, github }: Props) => {

  return (
	<article
	  className="group relative overflow-hidden rounded-xl
				 shadow-lg hover:shadow-xl
				 transition duration-300"
	>

	  {/* Imagen */}
	  <img
		src={imagen}
		alt={nombre}
		className="w-full h-70 object-cover"
	  />

	  {/* Contenido */}
	  <div
		className=" p-5 flex flex-col bg-kanagawa-bg md:absolute md:inset-0 md:bg-black/80
					md:opacity-0 md:group-hover:opacity-100 md:transition md:duration-300
		"
	  >

		{/* Top */}
		<div>
			<h3 className="text-lg font-semibold text-kanagawa-primary mb-2">
				{nombre}
			</h3>

			<p className="text-sm text-kanagawa-text-primary">
				{descripcion}
			</p>
		</div>

		{/* Spacer */}
		<div className="flex-1"></div>

		{/* Tecnologías */}
		<div className="flex flex-wrap justify-center gap-2 my-5">
		  {tecnologias.map((tech) => (
			<span
			  key={tech}
			  className="px-2 py-1 text-xs rounded-md
						 bg-amber-500/20
						 text-amber-400"
			>
			  {tech}
			</span>
		  ))}
		</div>

		{/* GitHub */}
		<a
			href={github}
			target="_blank"
			rel="noopener noreferrer"
			className="text-gray-300 hover:text-kanagawa-highlight active:text-kanagawa-highlight
					 hover:drop-shadow-[0_0_5px_#76946A]
					 transition text-sm"
		>
		  Ver GitHub
		</a>

		</div>

	</article>
  )
}