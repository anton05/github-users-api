import { FC, useState } from "react"
import { SearchBar } from "../../Components/SearchBar/SearchBar"
import { getUser } from "../../API/User/getUser"
import { UserCard } from "../../Components/UserCard/UserCard"
import { ErrorCard } from "../../Components/ErrorCard/ErrorCard"
import { Loader } from "../../Components/Loader/Loader"
import { Container, Box, Typography } from "@mui/material"
import { User } from "../../Types/User/User"

export const Main: FC = () => {
	const [isLoading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<null | string>(null)
	const [user, setUser] = useState<User | null>(null)

	const onSearch = async (searchValue: string) => {
		const userName = searchValue.replace(/\s/g, '')
		setLoading(true)

		try {
			const response = await getUser(userName)
			if (!response.ok) {
				const error = await response.json()
				setError(error.message)
				setLoading(false)
				return
			}

			const user: User = await response.json()
			setUser(user)
			setError(null)
			setLoading(false)
		} catch (error) {
			throw new Error(`Request failed: ${error}`)
		}
	}

	return (
		<Container maxWidth="md">
			<Box 
				display="flex" 
				flexDirection="column" 
				alignItems="center"
				marginTop={3}
			>
				<SearchBar 
					onSearch={onSearch} 
					isLoading={isLoading} 
				/>
				<Box marginTop={10}>
					{!user && !error && !isLoading && (
						<Typography variant="h4">
							Search github user!
						</Typography>
					)}

					{user && !isLoading && !error && <UserCard data={user} />}
					{error && !isLoading && <ErrorCard message={error} />}
					{isLoading && <Loader />}
				</Box>
			</Box>
		</Container>
	)
}
