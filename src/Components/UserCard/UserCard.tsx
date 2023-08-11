import { FC } from "react"
import { 
	Card,
	CardContent,
	Typography,
	Link,
	Alert,
	Chip,
	Tooltip,
	Box,
	Divider
 } from "@mui/material"
import { Avatar } from "../Avatar/Avatar"
import { User } from "../../Types/User/User"

type Props = {
	data: User
}

export const UserCard: FC<Props> = ({ 
	data
 }) => {
	const { 
		avatar_url,
		name,
		login,
		followers,
		created_at,
		html_url,
		bio
	} = data
	
	const createdDate = created_at?.split("T")[0]

	const cutString = (string: string, maxLength: number): string => {
		return string.slice(0, maxLength) + "..."
	}
	
	const userName = name || login

	return (
		<Card>
			<CardContent 
				sx={{ 
					height: "490px",
					width: "350px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					gap: "5px",
					textAlign: "center"
			 }}
			>
				<Avatar 
					src={avatar_url}
					sx={{
						'&:hover': {
						  transform: "scale(1.1)",
						  boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
						  border: "none"
						},
						border: "1px solid #D3D3D3"
					  }}
				 />
				<Typography variant="h4" marginTop={2}>
					{userName.length > 20 ? cutString(userName, 16) : userName}
				</Typography>
				<Divider 
					sx={{ 
						width: "100%",
						mb: "5px",
						mt: "5px"
					 }} 
				/>
				<Typography variant="h6" sx={{ color: "grey" }}>
					{bio && bio.length > 100 ? cutString(bio, 100) : bio}
				</Typography>
			 	<Box marginTop={1}>
					<Tooltip title="Created date" placement="right">
						<Chip 
							label={createdDate}
							sx={{ marginLeft: "5px" }}
						/>
					</Tooltip>
				</Box>
				<Typography variant="subtitle1" marginTop={1}>
					Followers: {followers}
				</Typography>
				<Alert
					severity="info" 
					sx={{ 
					marginTop: "15px",
					width: "90%",
					display: "flex",
					justifyContent: "center", 
					alignItems: "center"
				 }}
				>
					<Link
						underline="hover"
						target="_blank"
						href={html_url}
					>
						{html_url}
					</Link>
				</Alert>
			</CardContent>
		</Card>
	)
}
