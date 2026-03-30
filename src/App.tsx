import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./modules/genre";
import { useState } from "react";
import PlatformSelctor from "./components/PlatformSelctor";
import { type Platform } from "./modules/platform";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

  const handleReturnHome = () => {
    setSelectedGenre(null);
    setSelectedPlatform(null);
  };

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
          <NavBar onReturnHome={handleReturnHome} />
        </GridItem>
        <GridItem hideBelow={"lg"} area={"aside"} px={5}>
          <GenreList
            SelectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
          />
        </GridItem>
        <GridItem area={"main"}>
          <PlatformSelctor
            selectedPlatform={selectedPlatform}
            onSelectPlatform={setSelectedPlatform}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
