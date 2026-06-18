import { redes } from "../../data/misDatos"

export const Footer = () => {
	return (
		<footer className="w-full py-6 px-4 border-t border-gray-200 bg-kanagawa-bg">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-kanagawa-text-primary dark:text-kanagawa-text-muted">
				<p className="font-medium">
					Diseñado y creado con <span className="text-[#58C4DC]">React</span>
				</p>

				<nav aria-label="Redes sociales">
					<ul className="flex items-center gap-6">
						<li>
							<a
								href={redes.github}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-kanagawa-highlight transition-colors"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href={redes.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-kanagawa-highlight transition-colors"
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}
