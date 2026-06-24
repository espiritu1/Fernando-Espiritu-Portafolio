import type React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const ButtonDarkMode: React.FC = () => {
	const { theme, setTheme } = useTheme();

	const handleToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<>
			{/*  idea para cambio de tema */}
			{/* <figure className="flex justify-center items-center">
			<img src={theme === "dark" ? estuslleno : estusvacio} className="w-8" alt="" onClick={handleToggle} />  
		</figure> */}

			<label className="relative inline-flex text:sm items-center cursor-pointer">
				<span className="sr-only">Cambiar modo oscuro</span>
				<input
					type="checkbox"
					checked={theme === 'dark'}
					onChange={handleToggle}
					className="sr-only peer"
				/>

				<div
					className={`relative active:bg-kanagawa-warning active:transition-colors  active:duration-500 hover:bg-kanagawa-warning w-10 h-4 border border-black/25 rounded-full 
					transition-colors  duration-500 ease-in-out ${theme === 'dark' ? ' bg-kanagawa-100' : 'bg-kanagawa-bg-lighter'}`}
				>
					<div
						className={`border absolute  top-1/2 -translate-y-1/2 w-4.5 h-4.5 
						${theme === 'dark' ? 'bg-kanagawa-bg-light' : 'bg-kanagawa-100'} 
						rounded-full shadow-md
						transition-transform duration-500 ease-in-out
						${theme === 'dark' ? ' translate-x-5 scale-110' : ' translate-x-left-2 scale-110'}`}
					/>
				</div>
			</label>
		</>
	);
};
