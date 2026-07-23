import { useEffect, useRef } from 'react';

export const useInfiniteCarousel = (speed = 0.5, direction: 'left' | 'right' = 'left') => {
	const trackRef = useRef<HTMLUListElement>(null);
	const pausedRef = useRef(false);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const itemsWidth = track.scrollWidth / 2;
		const dir = direction === 'left' ? -1 : 1;
		let pos = direction === 'left' ? 0 : -itemsWidth;
		let rafId: number;

		const animate = () => {
			if (!pausedRef.current) {
				pos += dir * speed;
				if (pos <= -itemsWidth || pos >= 0) {
					pos = direction === 'left' ? 0 : -itemsWidth;
				}
				track.style.transform = `translateX(${pos}px)`;
			}
			rafId = requestAnimationFrame(animate);
		};

		rafId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(rafId);
	}, [speed, direction]);

	const pause = () => {
		pausedRef.current = true;
	};
	const resume = () => {
		pausedRef.current = false;
	};

	return { trackRef, pause, resume };
};
