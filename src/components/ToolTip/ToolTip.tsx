interface TooltipProps {
  children: React.ReactNode;
  visible?: boolean;
  position?: "top" | "top-strong";
}

export const Tooltip = ({ children,  position = "top" }: TooltipProps) => {

  const positionClass =
    position === "top" ? "-top-6" : "-top-13";

  return (
    <span
      className={` 
        absolute
        left-8
        ${positionClass}  
        text-xs   
        px-2  
        py-1
        rounded-md
        whitespace-nowrap
        transition-opacity
        hidden group-hover:block
       text-kanagawa-bg-dark
bg-kanagawa-text-primary
        border border-bs-kanagawa-text-secondary
       
        dark:text-kanagawa-bg-dark
       
      `}
    >
      {children }
    </span>
  );
};