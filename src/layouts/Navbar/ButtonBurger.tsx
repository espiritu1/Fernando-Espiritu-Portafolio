import { GiHamburgerMenu } from "react-icons/gi"

interface Props {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

export default function ButtonBurger({ isOpen, setIsOpen }: Props) {

	return (
	<button 
			className="ml-1 flex sm:hidden text-2xl items-center"
			onClick={() => setIsOpen(!isOpen)}
			aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
			aria-expanded={isOpen}
			aria-controls="mobile-menu"
		>
			<GiHamburgerMenu />
		</button>
	)
}