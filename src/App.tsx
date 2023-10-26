import { useState } from "react";

import "./App.css";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
  Box,
  HStack,
  Flex,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Gamegrid from "./components/Gamegrid";
import Resultcheck from "./components/Resultcheck";
import GenereList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  category: String | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav"
         "main"`,
        lg: `"nav nav" 
        " aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={"5px"}>
          <GenereList
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              onselectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
              selectedPlatform={gameQuery.platform}
            />
          </Box>
          <SortSelector
            onselectSortOrder={(category) =>
              setGameQuery({ ...gameQuery, category })
            }
            selectedCategory={gameQuery.category}
          />
        </Flex>
        <Gamegrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
