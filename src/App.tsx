import './App.css';
import { ScrollReveal } from './components/ScrollReveal';
import { About } from './sections/About/About';
import { CardContacto } from './sections/CardContacto/CardContacto';
import Estudios from './sections/Estudios/Estudios';
import { Experiencia } from './sections/Experiencia/Experiencia';
import { MainLayout } from './layouts/MainLayout';
import { Proyectos } from './sections/Proyectos/Proyectos';
import { Tecnologias } from './sections/Tecnologias/Tecnologias';

function App() {
	return (
		<MainLayout>
			<ScrollReveal>
				<About />
			</ScrollReveal>

			<ScrollReveal delay={100}>
				<Experiencia />
			</ScrollReveal>

			<ScrollReveal delay={100}>
				<Proyectos />
			</ScrollReveal>

			<ScrollReveal delay={100}>
				<Estudios />
			</ScrollReveal>

			<ScrollReveal delay={150}>
				<Tecnologias />
			</ScrollReveal>

			<ScrollReveal delay={150} direction="fade">
				<CardContacto />
			</ScrollReveal>
		</MainLayout>
	);
}

export default App;
