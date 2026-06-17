import type { ReactNode } from "react";
import { useTheme } from "./useTheme";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const themeHook = useTheme();
	
	return (
		<ThemeContext.Provider value={{ theme: themeHook.theme, setTheme: themeHook.setTheme }}>
			<div className="min-h-screen 
				text-kanagawa-bg-lighter bg-kanagawa-text-primary
			 
			 dark:bg-kanagawa-bg-light dark:text-kanagawa-text-primary">
				{children}
			</div>
		</ThemeContext.Provider>
	);
};


