import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
          <GridItem hideBelow={'lg'} area={"aside"} bg={"gold"}>Aside</GridItem>
          <GridItem area={"main"} bg={"dodgerblue"}>Main</GridItem>
      </Grid>
    </div>
  );
};

export default App;