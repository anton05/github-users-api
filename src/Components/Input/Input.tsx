import { FC, ChangeEvent } from "react"
import { TextField } from "@mui/material"

type Props = {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	label?: string
	placeholder?: string
}

export const Input: FC<Props> = ({
	value,
	onChange,
	label,
	placeholder
}) => {
  return <TextField 
		label={label} 
		variant="standard"
		value={value}
		onChange={onChange}
		placeholder={placeholder}
   />
}