import { FC } from "react"
import { Alert } from "@mui/material"

type Props = {
	message: string
}

export const ErrorCard: FC<Props> = ({ message }) => {
	return (
		<Alert severity="error" sx={{ textAlign: "center" }}>
			{message}
		</Alert>
	)
}