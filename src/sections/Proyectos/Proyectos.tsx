import { ScrollReveal } from '../../components/ScrollReveal';
import { ProyectItem } from './ProyectItem';
import { proyectos } from '../../data/misDatos';

export const Proyectos = () => {
	return (
		<>
			<section id="proyectos" className="py-16 max-w-6xl w-[85%] mx-auto">
				<h2
					id="tecnologias-title"
					className="text-2xl font-bold font-heading text-left mb-8 ml-20"
				>
					Proyectos
				</h2>

				<div className="flex flex-wrap justify-center gap-6">
					{proyectos.map((proj, i) => (
						<ScrollReveal key={i} delay={i * 100}>
							<ProyectItem {...proj} />
						</ScrollReveal>
					))}
				</div>
			</section>
		</>
	);
};
