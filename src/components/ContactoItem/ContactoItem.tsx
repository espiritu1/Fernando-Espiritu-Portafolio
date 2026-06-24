import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

interface ContactoItemProps {
	icon: React.ReactNode;
	text: string;
	copyText?: string;
	href?: string;
	tooltip?: string;
	className?: string;
}

export const ContactoItem = ({
	icon,
	text,
	href,
	tooltip,
	className = '',
}: ContactoItemProps) => {
	const [tooltipContent, setTooltipContent] = useState(tooltip);

	const copiar = () => {
		if (!text) return;

		navigator.clipboard.writeText(text);
		setTooltipContent('Copiado');

		setTimeout(() => {
			setTooltipContent(tooltip);
		}, 1000);
	};

	const Component = href ? 'a' : 'button';

	return (
		<div className="relative w-fit group">
			<Component
				{...(href
					? { href, target: '_blank', rel: 'noopener noreferrer' }
					: { onClick: copiar })}
				data-tooltip-id={tooltip ? 'contact-tooltip' : undefined}
				data-tooltip-content={tooltipContent}
				className={`flex items-center gap-3 text-kanagawa-100 active:bg-kanagawa-highlight active:text-kanagawa-bg-dark hover:bg-kanagawa-highlight hover:text-kanagawa-bg-dark px-2 rounded-2xl transition-colors text-left ${className}`}
			>
				{icon}
				<span>{text}</span>
			</Component>

			<Tooltip id="contact-tooltip" place="top" variant="dark" noArrow />
		</div>
	);
};
