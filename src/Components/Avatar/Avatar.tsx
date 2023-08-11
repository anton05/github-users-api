import { FC } from "react"
import { Box } from "@mui/material"

type Props = {
	src: string
}

export const Avatar: FC<Props> = ({ src }) => {
	return (
		<Box 
			component="img" 
			src={src}
			maxHeight="150px"
			maxWidth="150px"
			borderRadius="100%"
		/>
	)
}