import { useState, useRef, useEffect } from 'react';
import { ButtonDarkMode } from '../../components/ButtonDarkMode';
import ButtonBurger from './ButtonBurger';
import { NavLinks } from './NavbarLink';
import { Avatar } from '../../components/Avatar/Avatar';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement>(null);
	// cerrar al hacer click fuera
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<>
			<header className="sticky top-0 z-30 w-full pt-4" style={{ fontSize: '16px' }}>
				<nav
					className="w-[90%] max-w-6xl mx-auto p-2 flex justify-between rounded-full 
								backdrop-blur-md transition-colors border border-t-0 border-b-0 
								border-kanagawa-bg-lighter dark:border-kanagawa-text-primary "
				>
					<ButtonBurger isOpen={isOpen} setIsOpen={setIsOpen} />

					<div className="flex items-center">
						<Avatar size="ico" />
					</div>

					<NavLinks />
					<ButtonDarkMode />
				</nav>
			</header>

			{isOpen && (
				<div className="fixed inset-0 bg-black/40 z-40 sm:hidden"></div>
			)}

			<div
				ref={sidebarRef}
				className={`
					bg-kanagawa-bg
					text-kanagawa-text-secondary
					fixed top-0 left-0 h-full w-64
					shadow-lg
					transform transition-transform duration-300
					sm:hidden
					z-50
					${isOpen ? 'translate-x-0' : '-translate-x-full'}
				`}
			>
				{/* Botón cerrar */}
				<div className="flex justify-end p-4">
					<button
						onClick={() => setIsOpen(false)}
						className="text-2xl"
					>
						✕
					</button>
				</div>

				<div className="p-6">
					<NavLinks
						direction="col"
						onClick={() => setIsOpen(false)}
					/>
				</div>
			</div>
		</>
	);
};
