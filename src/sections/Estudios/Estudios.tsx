
import { ExperienciaItem } from '../../components/ExperienciaItem/ExperienciaItem'

export default function Estudios() {
  return (
	 <section className="py-10 max-w-6xl  w-[85%] mx-auto mb-10 "  >
	  <h2 className="text-2xl font-bold text-left  mb-8 ml-20 ">
			Formación académica
		</h2>

	  <div className="flex flex-col gap-8 max-w-2xl mx-auto">

	  
		<ExperienciaItem
			descripcion={
			<> 
			<p> Licenciatura en Tecnologías Computacionales  </p>
			<p>2018 - 2022</p>
			</>}
			puesto=" Universidad Veracruzana"

			/>
		</div>
	  
	</section>
  )
}
