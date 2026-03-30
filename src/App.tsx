import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./modules/genre";
import { useState } from "react";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const handleSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
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
          <NavBar onSelectAllGenres={() => setSelectedGenre(null)} />
        </GridItem>
        <GridItem hideBelow={"lg"} area={"aside"} px={5}>
          <GenreList
            SelectedGenre={selectedGenre}
            onSelectGenre={handleSelectGenre}
          />
        </GridItem>
        <GridItem area={"main"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
