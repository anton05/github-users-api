import { FC, ReactNode } from "react"
import { Button as CustomButton } from "@mui/material"

type Props = {
  onClick: () => void
  disabled?: boolean
  children: ReactNode
}

export const Button: FC<Props> = ({
  onClick,
  disabled,
  children
 }) => {
  return <CustomButton 
      onClick={onClick} 
      disabled={disabled}
      variant="contained"
    >
      {children}
    </CustomButton>
}