import { useState } from "react";

import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Gamegrid from "./components/Gamegrid";
import Resultcheck from "./components/Resultcheck";
import GenereList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelecetedGenre] = useState<Genre | null>(null);
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
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" padding={"5px"}>
          <GenereList onSelectGenre={(genre) => setSelecetedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Gamegrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
