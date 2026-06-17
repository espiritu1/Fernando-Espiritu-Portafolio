import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineLinkedin
} from "react-icons/ai";

import { ContactoItem } from "../../components/ContactoItem/ContactoItem";


export const CardContacto = () => {

	const email = "fere.espiritu@gmail.com";
	const telefono = "2288484335";
	const LinkedIn ="https://www.linkedin.com/in/fernando-espiritu-372539248/"
	
	return (
		<section id="contacto" className="my-15 mx-4">
		
			<div className="max-w-md mx-auto  rounded-2xl p-6 bg-kanagawa-bg text-kanagawa-text-primary">
			
				<h2 className="text-2xl text-kanagawa-primary text-center mb-6">			
					Contacto
				</h2>
			
				<div className="space-y-6">

					<ContactoItem
						icon={<AiOutlineMail className="text-xl" />}
						text={email}
						tooltip="Copiar correo"
					/>

					<ContactoItem
						icon={<AiOutlineLinkedin className="text-xl" />}
						text="LinkedIn"
						href={LinkedIn}
						tooltip="Abrir en navegador"
					/>

					<div className="flex items-center gap-6">

						<ContactoItem
							icon={<AiOutlineWhatsApp className="text-xl" />}
							text={telefono}
							tooltip="copiar teléfono"/>
						<a
							href={`https://wa.me/52${telefono}`}
							target="_blank"
							rel="noopener noreferrer"
							className=" text-md border  active:bg-kanagawa-highlight active:text-kanagawa-bg border-kanagawa-border  py-1 px-2 rounded-md  bg-kanagawa-success hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300 inline-block
							"> Abrir en navegador
						</a>

					</div>
				</div>
			</div>
		</section>
  );
};











