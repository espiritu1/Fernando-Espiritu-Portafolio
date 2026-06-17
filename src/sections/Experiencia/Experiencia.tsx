

import { ExperienciaItem } from "../../components/ExperienciaItem/ExperienciaItem";

export const Experiencia = () => {
  return (
    <section className="py-10 max-w-6xl  w-[85%] mx-auto mb-10" id="experiencia">

		<h2 className="text-2xl font-bold text-left  mb-8 ml-20 ">
			Experiencia
		</h2>

		<div className="flex flex-col gap-8 max-w-2xl mx-auto">

			<ExperienciaItem
				puesto="Full Stack "
				empresa="Dinamo  •"
				fecha=" 2022 - 2023"
				tecnologias="HTML, CSS, JavaScript, Jquery, PHP, Oracle Database, Bootstrap, Subversion"
				descripcion={
					<>
						<p className="text-left my-4 ml-8">
							Desarrollé una plataforma web interna para la gestión y visualización 
							de videos instructivos, facilitando la capacitación y estandarización
							de procesos del personal.
						</p>		
						<p className="text-left my-4 ml-8">
							Colaboré en el desarrollo de un sistema web para el registro e
							ingreso de nuevo personal.
						</p>		
						<p className="text-left my-4 ml-8">
							Implementé mejoras en el sistema de autenticación (login),
							centralizando el acceso del personal a las plataformas internas.
							Participé en la creación de un módulo de asignación y gestión de
							permisos para controlar el acceso de usuarios a través  de perfilados.
							Contribuí en mejorar la organización y accesibilidad de la información de usuarios.
						</p>
					</>
				}			
			/>		
		  </div>

	

    </section>
  );
};