import { CiLinkedin } from "react-icons/ci";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { Avatar } from "../../components/Avatar/Avatar"
import { Descripcion } from "../Descripcion/Descripcion"
import { Disponible } from "../Disponible/Disponible"
import { perfil, redes } from "../../data/misDatos"
import CV from "../../assets/CV/Fernando_Espiritu_CV.docx"

export const About = () => {
	return (
		<>
		<section id="sobreMi" className="mt-10 pb-5 w-[85%] mx-auto">
			<div className="max-w-6xl mx-auto">

				<header className="flex flex-col items-center text-center mb-11">

					<h1 className="text-7xl pb-7 font-bold
						bg-radial from-[#FFD700] to-[#CC0000]
						dark:bg-radial dark:from-[#F5F0E6] dark:to-[#F7C948]
						bg-clip-text text-transparent">
						{perfil.nombre}
					</h1>

					<div className="flex items-center">

						<h2 className="text-3xl font-medium mr-2
							bg-radial from-[#EF5F00] to-[#FF0000]
							bg-clip-text text-transparent">
							{perfil.titulo}
						</h2>

						<div className="md:hidden">
							<Avatar size="md" />
						</div>
					</div>

				</header>

				<Disponible/>

				<Descripcion/>

				<div className="flex justify-center flex-wrap gap-3 w-[65%] mx-auto pb-5">
					<a className="active:bg-kanagawa-highlight active:text-kanagawa-bg border-kanagawa-bg-lighter mx-auto md:mx-0 border text-kanagawa-text-primary rounded-md px-4 bg-kanagawa-success inline-flex items-center h-9 hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300"
						href={CV}
						download="Fernando_Espiritu_CV.docx"
						aria-label="Descargar CV"
						title="Descargar CV">
						<AiOutlineCloudDownload className="text-xl" />
						<span>CV</span>
					</a>

					<a className="active:bg-kanagawa-highlight active:text-kanagawa-bg border-kanagawa-bg-lighter mx-auto md:mx-0 border text-kanagawa-text-primary rounded-md px-4 bg-kanagawa-success inline-flex items-center h-9 hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300"
						href={redes.github}
						target="_blank"
						rel="noopener noreferrer">
						<IoLogoGithub className="text-xl" />
						<span>GitHub</span>
					</a>

					<a className="active:bg-kanagawa-highlight active:text-kanagawa-bg border-kanagawa-bg-lighter mx-auto md:mx-0 border text-kanagawa-text-primary rounded-md px-4 bg-kanagawa-success inline-flex items-center h-9 hover:bg-kanagawa-highlight hover:text-kanagawa-bg transition-colors duration-300"
						href={redes.linkedin}
						target="_blank"
						rel="noopener noreferrer">
						<CiLinkedin className="text-xl" />
						<span>LinkedIn</span>
					</a>
				</div>

			</div>

		</section>
	</>
	)
}