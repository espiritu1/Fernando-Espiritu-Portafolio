interface ExperienciaItemProps {
	puesto?: string;
	empresa?: string;
	fecha?: string;
	tecnologias?: string;
	descripcion?: string[];
}

export const ExperienciaItem = ({
	puesto,
	empresa,
	fecha,
	tecnologias,
	descripcion,
}: ExperienciaItemProps) => {
	return (
		<article className="border-l-2 border-kanagawa-secondary pl-4 relative">
			<div className="absolute w-3 h-3 hover:drop-shadow-[0_0_5px_#957FB8] rounded-full bg-kanagawa-secondary -left-[0.4375rem] top-1" />
			<header>
				<h3 className="text-2xl font-semibold font-heading text-kanagawa-primary">
					{puesto}
				</h3>

				{empresa && (
					<p className="text-md text-kanagawa-text-muted">
						<span>
							{empresa} {fecha}{' '}
						</span>
					</p>
				)}
			</header>

			<section className="mt-2 ">
				{descripcion?.map((texto, i) => (
					<p key={i} className={`my-4 ${empresa ? "text-left ml-8" : "text-center"}`}>
						{texto}
					</p>
				))}
			</section>

			{fecha && !empresa && (
				<p className="text-center my-4 text-kanagawa-text-muted font-medium">
					{fecha}
				</p>
			)}

			<footer>
				<p className="mt-4 ml-7 text-shadow-kanagawa-text-primary italic text-sm">
					{tecnologias}
				</p>
			</footer>
		</article>
	);
};
