import { AlertProps, Alert, Link } from "@mui/material"
import { FC } from "react"

type Props = AlertProps&{
    link: string
}

export const LinkCard: FC<Props> = ({ 
    link,
    ...props
 }) => {
    return (
    <Alert severity="info" {...props}>
        <Link
            underline="hover"
            target="_blank"
            href={link}
        >
            {link}
        </Link>
    </Alert>
)
} 
