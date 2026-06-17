import { useState } from "react";
import { Tooltip } from "../ToolTip/ToolTip";

interface ContactoItemProps {
  icon: React.ReactNode;
  text: string;
  copyText?: string;
  href?: string;
  tooltip?: string;
  className?: string; 
}

export const ContactoItem = ({ icon, text, href, tooltip, className=""}: ContactoItemProps) => {

  const [copiado, setCopiado] = useState(false);

  const copiar = () => {
    if (!text) return;

    navigator.clipboard.writeText(text);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 1000);
  };

  const Component = href ? "a" : "button";

  return (
    <div className="relative w-fit group">
		<Component
			{...(href ? { href, target: "_blank", rel: "noopener noreferrer"}: { onClick: copiar})}
        	  className={`flex items-center gap-3  active:bg-kanagawa-highlight active:text-kanagawa-bg-dark hover:bg-kanagawa-highlight hover:text-kanagawa-bg-dark px-2 rounded-2xl  transition-colors text-left ${className}`}>
				{icon}
				<span >{text}</span>
				
		</Component>
		
		{tooltip && ( 
			<Tooltip > {tooltip} </Tooltip>
		)}
		
		{copiado && (
        <Tooltip position="top-strong" >
          Copiado
        </Tooltip>
      )}

    </div>
  );
};