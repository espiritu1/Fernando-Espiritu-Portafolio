import { useEffect, useRef } from 'react';

export const useInfiniteCarousel = (speed = 0.5) => {
	const trackRef = useRef<HTMLUListElement>(null);
	const pausedRef = useRef(false);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const itemsWidth = track.scrollWidth / 2;
		let pos = 0;
		let rafId: number;

		const animate = () => {
			if (!pausedRef.current) {
				pos -= speed;
				if (pos <= -itemsWidth) {
					pos += itemsWidth;
				}
				track.style.transform = `translateX(${pos}px)`;
			}
			rafId = requestAnimationFrame(animate);
		};

		rafId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(rafId);
	}, [speed]);

	const pause = () => {
		pausedRef.current = true;
	};
	const resume = () => {
		pausedRef.current = false;
	};

	return { trackRef, pause, resume };
};
