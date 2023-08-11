import { FC, useState, ChangeEvent } from "react"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import { Box } from "@mui/material"

type Props = {
	onSearch: (value: string) => void
	isLoading?: boolean 
}

export const SearchBar: FC<Props> = ({ 
	onSearch,
	isLoading
 }) => {
	const [inputValue, setInputValue] = useState<string>("")

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

	const handleSearch = () => {
		onSearch(inputValue)
		setInputValue("")
	}

	return <Box 
		display="flex"
		gap="10px"
	>
		<Input 
			value={inputValue} 
			onChange={handleInputChange}
			label="Github search"
			placeholder="Write name or login..."
		/>
		<Button 
			onClick={handleSearch}
			disabled={isLoading || !inputValue}
		>
			Search
		</Button>
	</Box>
}