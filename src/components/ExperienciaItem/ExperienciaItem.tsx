interface ExperienciaItemProps {
  puesto?: string;
  empresa?: string;
  fecha?: string;
  tecnologias?: string;
   descripcion?: React.ReactNode;
}

export const ExperienciaItem = ({ puesto, empresa, fecha, tecnologias, descripcion }: ExperienciaItemProps) => {
  return (
	<article className="border-l-2   border-kanagawa-secondary pl-4 relative">
		
		<div className="absolute w-3 h-3   hover:drop-shadow-[0_0_5px_#957FB8] rounded-full bg-kanagawa-secondary -left-1.75 top-1" />
			<header>
				<h3 className="text-2xl font-semibold text-kanagawa-primary">
					{puesto}
				</h3>

				<p className="text-md text-kanagawa-text-muted">
					<span>{empresa}  {fecha} </span>
				</p>
			</header>


	<section className="mt-2 text-kanagawa-fg">
			<p>
				{descripcion}
			</p>
		</section>
		
		<footer>
			<p className="mt-4 ml-7 text-kanagawa-fg italic text-sm">
			  { tecnologias}
			</p>
		</footer>
	</article>
  );
};