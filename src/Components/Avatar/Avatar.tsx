import { FC } from "react"
import { Box, BoxProps } from "@mui/material"

type Props = BoxProps&{
	src: string
}

export const Avatar: FC<Props> = ({ 
	src,
	...props
 }) => {
	return (
		<Box 
			component="img" 
			src={src}
			maxHeight="150px"
			maxWidth="150px"
			borderRadius="100%"
			{...props}
		/>
	)
}
