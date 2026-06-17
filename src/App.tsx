import './App.css'
import { About } from './sections/About/About'
import { CardContacto } from './sections/CardContacto/CardContacto'
import Estudios from './sections/Estudios/Estudios'
import { Experiencia } from './sections/Experiencia/Experiencia'
import { MainLayout } from './layouts/MainLayout'
import { Proyectos } from './sections/Proyectos/Proyectos'
import { Tecnologias } from './sections/Tecnologias/Tecnologias'

function App() {
	return (
		<MainLayout>
			<About/>
			<Experiencia/>
			<Proyectos/>
			<Estudios/>
			<Tecnologias/>
			<CardContacto/>
		</MainLayout>
	)
}

export default App
