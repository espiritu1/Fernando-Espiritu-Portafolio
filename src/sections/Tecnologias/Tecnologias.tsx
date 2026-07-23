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

interface Tech {
	icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
	label: string;
	glow: string;
}

const lenguajes: Tech[] = [
	{ icon: Html, label: 'HTML', glow: '#e34f26' },
	{ icon: Css, label: 'CSS', glow: '#264de4' },
	{ icon: JavaScript, label: 'JavaScript', glow: '#efdb50' },
	{ icon: TypeScript, label: 'TypeScript', glow: '#3178c6' },
];

const frameworks: Tech[] = [
	{ icon: React, label: 'React', glow: '#58c4dc' },
	{ icon: Tailwind, label: 'Tailwind', glow: '#38bdf8' },
	{ icon: Express, label: 'Express', glow: '#ffffff' },
];

const herramientas: Tech[] = [
	{ icon: Bun, label: 'Bun', glow: '#fbf0df' },
	{ icon: Npm, label: 'NPM', glow: '#cc0000' },
	{ icon: GitHub, label: 'GitHub', glow: '#ffffff' },
];

function TechIcon({ icon: Icon, label, glow }: Tech) {
	return (
		<figure className="flex flex-col items-center">
			<Icon
				className="size-15"
				style={{ filter: `drop-shadow(0 4px 20px ${glow}8f)` }}
			/>
			<figcaption className="pt-3">{label}</figcaption>
		</figure>
	);
}

interface TechGroupProps {
	title: string;
	items: Tech[];
	direction: 'left' | 'right';
	speedSeconds: number;
	delaySeconds: number;
}

function TechGroup({ title, items, direction, speedSeconds, delaySeconds }: TechGroupProps) {
	const animationName = direction === 'right' ? 'slide-right' : 'slide-left';

	return (
		<div>
			<h3 className="text-lg font-semibold font-heading text-kanagawa-primary text-left ml-24">
				{title}
			</h3>
			<div
				className="overflow-hidden pt-8"
				style={{
					containerType: 'inline-size',
					maskImage:
						'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
					WebkitMaskImage:
						'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
				}}
			>
				<div
					className="flex justify-start sm:justify-center gap-6 sm:gap-12"
					style={{
						animation: `${animationName} ${speedSeconds}s ease-in-out ${delaySeconds}s infinite`,
					}}
				>
					{items.map(item => (
						<TechIcon key={item.label} {...item} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Tecnologias = () => {
	return (
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

			<div className="flex flex-col gap-12 pt-8">
<TechGroup
	title="Lenguajes"
	items={lenguajes}
	direction="left"
	speedSeconds={12}
	delaySeconds={0}
/>
<TechGroup
	title="Frameworks"
	items={frameworks}
	direction="left"
	speedSeconds={12}
	delaySeconds={-6}
/>
				<TechGroup
					title="Herramientas"
					items={herramientas}
					direction="right"
					speedSeconds={12}
					delaySeconds={-4}
				/>
			</div>
		</section>
	);
};
