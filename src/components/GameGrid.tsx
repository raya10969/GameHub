import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/modules/gameQuery";
import React from "react";

interface GameCardProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameCardProps) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchNextPageError,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];
  const gridProps = {
    columns: {
      base: 1,
      md: 2,
      lg: 3,
      xl: 4,
    },
    gap: "6",
  };

  const renderGridItems = () => {
    if (isLoading) {
      return skeletons.map((skeleton) => (
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>
      ));
    }

    return data?.pages.map((page, idx) => (
      <React.Fragment key={idx}>
        {page.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </React.Fragment>
    ));
  };

  return (
    <Box p="3">
      {error && <Text>{error.message}</Text>}
      {!isLoading && !error && data?.pages[0].count === 0 && (
        <Text color="gray.500">该筛选条件下暂无游戏数据。</Text>
      )}
      <SimpleGrid {...gridProps}>{renderGridItems()}</SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} my="5">
          {isFetchNextPageError ? "Loading" : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
