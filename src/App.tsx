import { useState } from "react";

import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Gamegrid from "./components/Gamegrid";
import Resultcheck from "./components/Resultcheck";
import GenereList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelecetedGenre] = useState<Genre | null>(null);
  const [selectedPlatform , setSelectedPlatform]= useState <Platform| null>(null)
  
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
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
     <Show above="lg">
        <GridItem area="aside" padding={"5px"}>
          <GenereList onSelectGenre={(genre) => setSelecetedGenre(genre)}  selectedGenre = {selectedGenre}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box mr={2} paddingLeft={850}>
        <PlatformSelector onselectPlatform={(platform)=> setSelectedPlatform(platform)} selectedPlatform= {selectedPlatform}  />
        </Box>
        <Gamegrid selectedGenre={selectedGenre} selectedPlatform = {selectedPlatform} />
       
      </GridItem>
    </Grid>
  );
}

export default App;
