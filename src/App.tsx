import "./App.css";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GameGenreList from "./components/GameGenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQauery{
  genre : Genre | null;
  platform : Platform | null;
  sortOrder : string | null;
  searchText : string | null;
}


function App() {
  const [gameQuery, setGameQuery] = useState<GameQauery>({} as GameQauery)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base : '1fr',
          lg: '300px 1fr'
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GameGenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameHeading gameQuery={gameQuery} />
         <Flex paddingX={3} marginBottom={2} >
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) =>setGameQuery({...gameQuery, platform})}/>
          </Box>
          <SortSelector selectedOrder={gameQuery.sortOrder} onSelectOrder={(sortOrder : string)=>setGameQuery({...gameQuery, sortOrder})}/>
         </Flex>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
