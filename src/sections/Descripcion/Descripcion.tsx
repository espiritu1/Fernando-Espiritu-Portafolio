import { Avatar } from "../../components/Avatar/Avatar"


export const Descripcion = () => {
	
	return(
			<>
		<article className="pt-10">

			<div className="float-left mr-25  mb-10 hidden md:block 
				w-64 h-64 
				[shape-outside:circle(50%)] 
				">
				
				<Avatar size="lg" className=""/>
			</div>

			<div className="text-left mb-6 ">
				<p className="mb-4 ">
					Soy desarrollador web enfocado en la creación de interfaces modernas y funcionales. 
					Trabajo principalmente con HTML, CSS, JavaScript, React y TypeScript, utilizando herramientas como 
					Tailwind CSS para construir experiencias rápidas y atractivas.
				</p>
				<p className="mb-4">
					Me gusta aprender constantemente y mejorar mis habilidades, cuidando tanto el diseño como la calidad
					del código. Busco oportunidades donde pueda aportar soluciones eficientes y seguir creciendo como 
					desarrollador.
				</p>
				<p className="mb-4">
					Actualmente estoy aprendiendo arquitectura
				</p>
			</div>
			
		</article>
		
		</>
	)
}