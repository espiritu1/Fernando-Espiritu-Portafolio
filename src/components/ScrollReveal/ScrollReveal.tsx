import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ScrollRevealProps {
	children: ReactNode;
	direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
	delay?: number;
	duration?: number;
	threshold?: number;
	rootMargin?: string;
	triggerOnce?: boolean;
	className?: string;
}

const directionClasses: Record<string, string> = {
	up: '-translate-y-10',
	down: 'translate-y-10',
	left: '-translate-x-10',
	right: 'translate-x-10',
	fade: '',
};

export const ScrollReveal = ({
	children,
	direction = 'up',
	delay = 0,
	duration = 700,
	threshold,
	rootMargin,
	triggerOnce,
	className = '',
}: ScrollRevealProps) => {
	const { ref, isVisible } = useScrollReveal({
		threshold,
		rootMargin,
		triggerOnce,
	});

	const initial = `opacity-0 ${directionClasses[direction] || directionClasses.up}`;
	const visible = 'opacity-100 translate-y-0 translate-x-0';

	return (
		<div
			ref={ref}
			className={`${initial} ${isVisible ? visible : ''} transition-all ease-out ${className}`}
			style={{
				transitionDuration: `${duration}ms`,
				transitionDelay: `${delay}ms`,
			}}
		>
			{children}
		</div>
	);
};
