import solaire from '../../assets/img/solaire.png';
import { perfil } from '../../data/misDatos';

interface AvatarProps {
	size?: 'ico' | 'sm' | 'md' | 'lg';
	className?: string;
	flippable?: boolean;
	flipBackImage?: string;
	flipText?: string;
}

export const Avatar = ({
	size = 'md',
	className = '',
	flippable,
	flipBackImage,
	flipText,
}: AvatarProps) => {
	const sizes: Record<string, string> = {
		ico: 'w-7 h-7',
		sm: 'w-30 h-30',
		md: 'w-48 h-48',
		lg: 'w-72 h-72',
	};

	if (flippable && flipBackImage) {
		const sizeClass = sizes[size];

		return (
			<figure className={`flex justify-center w-full ${className}`}>
				<div className={`${sizeClass} perspective-[1000px]`}>
					<div
						className="relative w-full h-full [transform-style:preserve-3d]
							transition-transform duration-700 hover:[transform:rotateY(180deg)]"
					>
						<div className="absolute inset-0 [backface-visibility:hidden] rounded-full overflow-hidden">
							<img
								src={solaire}
								alt={perfil.avatarAlt}
								className="w-full h-full object-cover shadow-xl"
							/>
							<span
								className="absolute bottom-2 left-1/2 -translate-x-1/2
								text-xs text-white bg-black/60 px-3 py-1
								rounded-full whitespace-nowrap"
							>
								{flipText}
							</span>
						</div>
						<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full overflow-hidden">
							<img
								src={flipBackImage}
								alt={perfil.avatarAlt}
								className="w-full h-full object-cover shadow-xl"
							/>
						</div>
					</div>
				</div>
			</figure>
		);
	}

	return (
		<figure className={`flex justify-center w-full ${className}`}>
			<img
				src={solaire}
				alt={perfil.avatarAlt}
				className={`${sizes[size]} object-cover rounded-full shadow-xl`}
			/>
		</figure>
	);
};
