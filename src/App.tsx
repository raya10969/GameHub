import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelctor from "./components/PlatformSelctor";
import type { GameQuery } from "./modules/gameQuery";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleReturnHome = () => {
    setGameQuery({} as GameQuery);
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
          <NavBar
            onReturnHome={handleReturnHome}
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <GridItem hideBelow={"lg"} area={"aside"} px={5}>
          <GenreList
            SelectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genreId: genre.id });
            }}
          />
        </GridItem>
        <GridItem area={"main"} px="3">
          <GameHeading gameQuery={gameQuery} />
          <HStack gap="5" mt="5" mb="7">
            <PlatformSelctor
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platformId: platform.id });
              }
              }
              />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectedOrder={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder });
              }}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
