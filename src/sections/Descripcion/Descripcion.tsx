import { Avatar } from '../../components/Avatar/Avatar';
import { perfil } from '../../data/misDatos';
import yo from '../../assets/img/yo.webp';

export const Descripcion = () => {
	return (
		<>
			<article className="pt-10">
				<div
					className="float-left mr-25 mb-10 hidden md:block
					w-72 h-72
					[shape-outside:circle(50%)]"
				>
					<Avatar
						size="lg"
						flippable
						flipBackImage={yo}
						flipText="Arrastra el mouse"
					/>
				</div>

				<div className="text-left mb-6">
					{perfil.descripcion.map((texto, i) => (
						<p key={i} className="mb-4">
							{texto}
						</p>
					))}
				</div>
			</article>
		</>
	);
};
