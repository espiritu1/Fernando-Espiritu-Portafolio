import type { ReactNode } from 'react';
import { useTheme } from './useTheme';
import { ThemeContext } from './ThemeContext';
import { BackgroundMesh } from '../components/BackgroundMesh/BackgroundMesh';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const themeHook = useTheme();

	return (
		<ThemeContext.Provider
			value={{ theme: themeHook.theme, setTheme: themeHook.setTheme }}
		>
			<div
				className="min-h-screen relative z-0
				text-kanagawa-bg-lighter bg-kanagawa-text-primary 
			 
			 dark:bg-kanagawa-bg-light dark:text-amber-100"
			>
				<BackgroundMesh />
				{children}
			</div>
		</ThemeContext.Provider>
	);
};
