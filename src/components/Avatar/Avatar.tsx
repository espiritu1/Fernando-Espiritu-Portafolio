import solaire from "../../assets/img/solaire.png"
import { perfil } from "../../data/misDatos"

interface AvatarProps {
	size?: "ico" | "sm" | "md" | "lg"
	className?: string
}

export const Avatar = ({ size = "md", className = "" }: AvatarProps) => {

	const sizes = {
		ico: "w-7 h-7",
		sm: "w-30 h-30",
		md: "w-48 h-48",
		lg: "w-72 h-72"
	}

	return (
		<figure className={`flex justify-center w-full ${className}`}>
			<img
				src={solaire}
				alt={perfil.avatarAlt}
				className={`${sizes[size]} object-cover rounded-full shadow-xl`}
			/>
		</figure>
	)
}