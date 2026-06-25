import { lazy, Suspense } from 'react';
import './App.css';
import { ScrollReveal } from './components/ScrollReveal';
import { About } from './sections/About/About';
import { MainLayout } from './layouts/MainLayout';

const Experiencia = lazy(() => import('./sections/Experiencia/Experiencia').then(m => ({ default: m.Experiencia })));
const Proyectos = lazy(() => import('./sections/Proyectos/Proyectos').then(m => ({ default: m.Proyectos })));
const Estudios = lazy(() => import('./sections/Estudios/Estudios'));
const Tecnologias = lazy(() => import('./sections/Tecnologias/Tecnologias').then(m => ({ default: m.Tecnologias })));
const CardContacto = lazy(() => import('./sections/CardContacto/CardContacto').then(m => ({ default: m.CardContacto })));

const sectionFallback = <div className="py-16" />;

function App() {
	return (
		<MainLayout>
			<ScrollReveal>
				<About />
			</ScrollReveal>

			<Suspense fallback={sectionFallback}>
				<ScrollReveal delay={100}>
					<Experiencia />
				</ScrollReveal>
			</Suspense>

			<Suspense fallback={sectionFallback}>
				<ScrollReveal delay={100}>
					<Proyectos />
				</ScrollReveal>
			</Suspense>

			<Suspense fallback={sectionFallback}>
				<ScrollReveal delay={100}>
					<Estudios />
				</ScrollReveal>
			</Suspense>

			<Suspense fallback={sectionFallback}>
				<ScrollReveal delay={150}>
					<Tecnologias />
				</ScrollReveal>
			</Suspense>

			<Suspense fallback={sectionFallback}>
				<ScrollReveal delay={150} direction="fade">
					<CardContacto />
				</ScrollReveal>
			</Suspense>
		</MainLayout>
	);
}

export default App;
