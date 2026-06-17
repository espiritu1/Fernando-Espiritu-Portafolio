import type { SVGProps } from "react";

export const Npm = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 2500 2500" {...props}>
      {/* Fondo */}
      <path 
        fill="#c00" 
        d="M0 0h2500v2500H0z" 
      />

      {/* Texto npm */}
      <path 
        fill="#fff" 
        d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" 
      />
    </svg>
  );
};