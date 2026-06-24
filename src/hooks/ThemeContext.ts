import React, { createContext } from 'react';
import type { Theme } from './useTheme';

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

export const useThemeContext = () => {
	const context = React.useContext(ThemeContext);

	if (!context) {
		throw new Error('useThemeContext debe usarse dentro de ThemeProvider');
	}
	return context;
};
