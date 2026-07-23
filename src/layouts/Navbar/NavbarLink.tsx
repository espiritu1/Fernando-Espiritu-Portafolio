interface Props {
	direction?: 'row' | 'col';
	onClick?: () => void;
}

export const NavLinks = ({ direction = 'row', onClick }: Props) => {
	const baseStyles = 'px-2 py-1';

	const linkStyles =
		'relative text-[16px] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-full after:-translate-x-1/2 after:scale-x-0 after:rounded-full after:bg-kanagawa-primary after:transition-transform after:duration-300 hover:after:scale-x-100';

	return (
		<>
			<ul
				className={`
		${
			direction === 'row'
				? 'hidden sm:flex items-center justify-end   whitespace-nowrap'
				: 'flex flex-col  divide-y divide-kanagawa-bg-lighter dark:divide-kanagawa-text-primary'
		}
	`}
			>
				<li className={`${baseStyles} `}>
					<a href="#sobreMi" className={linkStyles} onClick={onClick}>
						Sobre mí
					</a>
				</li>

				<li className={`${baseStyles}`}>
					<a
						href="#experiencia"
						className={linkStyles}
						onClick={onClick}
					>
						Experiencia
					</a>
				</li>
				<li className={`${baseStyles}`}>
					<a
						href="#proyectos"
						className={linkStyles}
						onClick={onClick}
					>
						Proyectos
					</a>
				</li>

				<li className={`${baseStyles} `}>
					<a
						href="#tecnologias"
						className={linkStyles}
						onClick={onClick}
					>
						Tecnologías
					</a>
				</li>

				<li className={`${baseStyles} `}>
					<a
						href="#contacto"
						className={linkStyles}
						onClick={onClick}
					>
						Contacto
					</a>
				</li>
			</ul>
		</>
	);
};
