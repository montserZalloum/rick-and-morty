import './CharacterCard.css'
import { Typography } from "@mui/material"

function CharacterCard(props:any) {
  
  return (
    <div className="character-card" data-testid={`character-card-${props.index}`}>
        <img className="character-avatar" width="100%" height="auto" src={props?.character?.image || ""} />
        <Typography variant="h6" mt="1" className="character-name">{props?.character?.name}</Typography>
    </div>
  )
}

export default CharacterCard