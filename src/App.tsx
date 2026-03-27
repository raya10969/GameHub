import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <div>
      <Grid templateAreas={{
        base: `"nav"
               "main"`,
        lg: `"nav   nav"
              "aside main"`, //992px
      }}>
          <GridItem area={"nav"}>
            <NavBar/>
          </GridItem>
          <GridItem hideBelow={'lg'} area={"aside"}>Aside</GridItem>
          <GridItem area={"main"}><GameGrid /></GridItem>
      </Grid>
    </div>
  );
};

export default App;