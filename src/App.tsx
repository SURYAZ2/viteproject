import { useState } from "react";

import "./App.css";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Gamegrid from "./components/Gamegrid";
import Resultcheck from "./components/Resultcheck";
import GenereList from "./components/GenreList";

function App() {
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
        <GridItem area="aside" bg="gold" padding={"5px"}>
          <GenereList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Gamegrid />
      </GridItem>
    </Grid>
  );
}

export default App;
