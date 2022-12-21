import { Box, Grid } from "@mui/material"
import './CharacterList.css'
import CharacterCard from "./character-card/CharacterCard"
import { useQuery } from "@apollo/client";

import Loader from "../../ui/Loader";
import NormalText from "../../ui/NormalText";
import PaginationContainer from "../../ui/PaginationContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { GET_CHARACTERS } from "../../../app/graphql/queries/characterQueries";
import { getCharacters } from "../../../app/graphql/queries/__generated__/getCharacters";



function CharacterList() {
    const {page} = useSelector((state:RootState) => state.character);
    const { loading, error, data } = useQuery<getCharacters>(GET_CHARACTERS,{
        variables: {
            page: page
        }
    });
    
    if (error) return <NormalText msg="Something Happened!" />

    if (loading) return <Loader />;
    if (data?.characters?.results?.length === 0) return <NormalText msg="No Data!" />;
    
  return (
    <>
        <Box data-testid="characters-list" className="character-list" sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 4,
        }}>
            {data?.characters?.results?.map((character,index)=>(
                <Grid xs={6} sm={3} item key={character?.id} >
                    <CharacterCard index={index}  character={character || null} />
                </Grid>
            ))}
        </Box>
        {data?.characters?.info && <PaginationContainer currentPage={page} info={data.characters.info} />}
    </>
  )
}

export default CharacterList