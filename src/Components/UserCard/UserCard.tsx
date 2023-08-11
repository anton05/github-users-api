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

	return (
		<Card>
			<CardContent 
				sx={{ 
					minWidth: "300px",
					maxWidth: "400px",
					minHeight: "300px",
					maxHeight: "500px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					gap: "5px",
					textAlign: "center"
			 }}
			>
				<Avatar src={avatar_url} />
				<Typography variant="h4" marginTop={2}>
					{name ?? login}
				</Typography>
				<Divider 
					sx={{ 
						width: "100%",
						mb: "5px",
						mt: "5px"
					 }} 
				/>
				<Typography variant="h6" sx={{ color: "grey" }}>
					{bio && bio.length > 100 ? bio.slice(0, 100) + "..." : bio}
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
				<Alert sx={{ marginTop: "15px" }}>
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