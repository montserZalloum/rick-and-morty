import { Stack } from "@mui/material";
import CharacterList from "./character-list/CharacterList";

function CharactersSection() {
  return (
    <Stack component="section" px={3} py={10} spacing={4} direction="column">
        <CharacterList />
    </Stack>
  )
}

export default CharactersSection