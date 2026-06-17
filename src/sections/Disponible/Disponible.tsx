import { BsPersonWorkspace } from "react-icons/bs"
import { ContactoItem } from "../../components/ContactoItem/ContactoItem"
import { AiOutlineMail } from "react-icons/ai"


export const Disponible = () => {
	return(
		<div className="flex flex-col md:flex-row justify-center items-center mt-5">

		  <div className="	border dark:text-kanagawa-bg-lighter border-kanagawa-bg-dark  
		  					justify-center rounded-2xl m-4 px-4 py-1  bg-kanagawa-accent 
							inline-flex items-center gap-2">
			<BsPersonWorkspace className="text-xl" />
			<span>Disponible para trabajar</span>
		  </div>
		  
		
		  <ContactoItem
			icon={<AiOutlineMail className="text-xl" />}
			text="fere.espiritu@gmail.com"
			tooltip="Copiar correo"
			  className=" border   text-kanagawa-text-primary  hover:text-kanagawa-bg  bg-kanagawa-success hover:bg-kanagawa-highlight border-kanagawa-bg-lighter  py-1 px-2 transition-colors duration-300  "
			
			/>

		
		</div>
	)
}