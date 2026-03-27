import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav"
               "main"`,
          lg: `"nav   nav"
              "aside main"`, //992px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem hideBelow={"lg"} area={"aside"} px={5}>
          <GenreList />
        </GridItem>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
