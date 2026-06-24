import { useInfiniteCarousel } from '../../hooks/useInfiniteCarousel';
import {
	Bun,
	Css,
	Express,
	GitHub,
	Html,
	JavaScript,
	Npm,
	React,
	Tailwind,
	TypeScript,
} from './index';

const techItems = [
	{ icon: Html, label: 'HTML', glow: '#e34f26' },
	{ icon: Css, label: 'CSS', glow: '#264de4' },
	{ icon: JavaScript, label: 'JavaScript', glow: '#efdb50' },
	{ icon: React, label: 'React', glow: '#58c4dc' },
	{ icon: Bun, label: 'Bun', glow: '#fbf0df' },
	{ icon: Tailwind, label: 'Tailwind', glow: '#38bdf8' },
	{ icon: TypeScript, label: 'TypeScript', glow: '#3178c6' },
	{ icon: GitHub, label: 'GitHub', glow: '#ffffff' },
	{ icon: Npm, label: 'NPM', glow: '#cc0000' },
	{ icon: Express, label: 'Express', glow: '#ffffff' },
];

export const Tecnologias = () => {
	const { trackRef, pause, resume } = useInfiniteCarousel(0.5);

	const items = (
		<>
			{techItems.map(({ icon: Icon, label, glow }) => (
				<li key={label} className="shrink-0 mr-20">
					<figure className="flex flex-col items-center">
						<Icon
							className="size-15"
							style={{
								filter: `drop-shadow(0 4px 20px ${glow}8f)`,
							}}
						/>
						<figcaption className="pt-3">{label}</figcaption>
					</figure>
				</li>
			))}
		</>
	);

	return (
		<>
			<section
				id="tecnologias"
				aria-labelledby="tecnologias-title"
				className="py-16 max-w-6xl w-[85%] mx-auto"
			>
				<h2
					id="tecnologias-title"
					className="text-2xl font-bold font-heading text-left mb-8 ml-20"
				>
					Tecnologías
				</h2>

				<div
					className="overflow-hidden pt-8"
					style={{
						maskImage:
							'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
						WebkitMaskImage:
							'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
					}}
				>
					<ul
						ref={trackRef}
						className="flex items-center px-4 will-change-transform"
						onMouseEnter={pause}
						onMouseLeave={resume}
					>
						{items}
						{items}
					</ul>
				</div>
			</section>
		</>
	);
};
