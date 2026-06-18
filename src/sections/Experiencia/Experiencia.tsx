
import { ExperienciaItem } from "../../components/ExperienciaItem/ExperienciaItem";
import { experiencia } from "../../data/misDatos";

export const Experiencia = () => {
	return (
		<section className="py-10 max-w-6xl w-[85%] mx-auto mb-10" id="experiencia">

			<h2 className="text-2xl font-bold text-left mb-8 ml-20">
				Experiencia
			</h2>

			<div className="flex flex-col gap-8 max-w-2xl mx-auto">
				{experiencia.map((exp, i) => (
					<ExperienciaItem key={i} {...exp} />
				))}
			</div>

		</section>
	);
};