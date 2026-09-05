export interface Props {
	nombre: string;
	imagen: string;
	imagenSmall: string;
	imagenSecundaria?: string;
	imagenSecundariaSmall?: string;
	descripcion: string;
	tecnologias: string[];
	github: string;
}

const Imagen = ({
	imagen,
	imagenSmall,
	nombre,
	className,
}: Pick<Props, 'imagen' | 'imagenSmall' | 'nombre'> & { className: string }) => (
	<picture className={className}>
		<source srcSet={imagenSmall} media="(max-width: 768px)" />
		<source srcSet={imagen} media="(min-width: 769px)" />
		<img
			src={imagenSmall}
			alt={nombre}
			loading="lazy"
			className="w-full h-56 md:h-full object-cover object-top"
		/>
	</picture>
);

const Contenido = ({
	nombre,
	descripcion,
	tecnologias,
	github,
}: Pick<Props, 'nombre' | 'descripcion' | 'tecnologias' | 'github'>) => (
	<>
		{/* Titulo */}
		<h3 className="shrink-0 text-center text-lg font-semibold font-heading text-kanagawa-primary mb-4">
			{nombre}
		</h3>

		{/* Descripción + tecnologías centradas en la zona del medio */}
		<div className="flex flex-1 flex-col justify-center">
			<p className="text-center text-sm text-kanagawa-100">{descripcion}</p>

			<div className="flex flex-wrap justify-center gap-2 mt-3">
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
		</div>

		{/* GitHub */}
		<a
			href={github}
			target="_blank"
			rel="noopener noreferrer"
			className="shrink-0 mt-4 text-center text-gray-300 hover:text-kanagawa-highlight active:text-kanagawa-highlight
			 hover:drop-shadow-[0_0_5px_#76946A]
			 transition text-sm"
		>
			Ver GitHub
		</a>
	</>
);

export const ProyectItem = ({
	nombre,
	imagen,
	imagenSmall,
	imagenSecundaria,
	imagenSecundariaSmall,
	descripcion,
	tecnologias,
	github,
}: Props) => {
	return (
		<article
			className="group relative flex flex-col overflow-hidden rounded-xl
			 shadow-lg hover:shadow-xl
			 transition duration-300"
		>
			{/* Imágenes */}
			<div className="flex flex-shrink-0 md:absolute md:inset-0">
				<Imagen
					imagen={imagen}
					imagenSmall={imagenSmall}
					nombre={nombre}
					className="flex-1"
				/>
				{imagenSecundaria && imagenSecundariaSmall && (
					<Imagen
						imagen={imagenSecundaria}
						imagenSmall={imagenSecundariaSmall}
						nombre={`${nombre} (opciones)`}
						className="flex-1"
					/>
				)}
			</div>

			{/* Contenido móvil: siempre visible debajo de la imagen */}
			<div className="flex flex-col p-4 bg-kanagawa-bg md:hidden">
				<Contenido
					nombre={nombre}
					descripcion={descripcion}
					tecnologias={tecnologias}
					github={github}
				/>
			</div>

			{/* Ghost desktop: define la altura real de la card sin mostrarse,
				para que el overlay con hover nunca corte la información */}
			<div className="hidden md:block invisible" aria-hidden="true">
				<div className="p-4">
					<Contenido
						nombre={nombre}
						descripcion={descripcion}
						tecnologias={tecnologias}
						github={github}
					/>
				</div>
			</div>

			{/* Overlay desktop: se revela al hover y cubre toda la card */}
			<div
				className="hidden md:flex flex-col p-4 bg-black/80
				 absolute inset-0
				 opacity-0 group-hover:opacity-100
				 transition duration-300"
			>
				<Contenido
					nombre={nombre}
					descripcion={descripcion}
					tecnologias={tecnologias}
					github={github}
				/>
			</div>
		</article>
	);
};