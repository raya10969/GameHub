import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
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
    console.log(gameQuery.genre);
    console.log(gameQuery.sortOrder);
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
            SelectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem area={"main"}>
          <Box pl="2.5">
            <GameHeading gameQuery={gameQuery} />
            <HStack gap="5" my="5">
              <PlatformSelctor
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectedOrder={(sortOrder) => {
                  setGameQuery({ ...gameQuery, sortOrder });
                }}
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
