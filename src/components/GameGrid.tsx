import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/modules/gameQuery";

interface GameCardProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameCardProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const gridProps = {
    padding: "3",
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

    return data?.results.map((game) => (
      <GameCardContainer key={game.id}>
        <GameCard game={game} />
      </GameCardContainer>
    ));
  };

  return (
    <>
      {error && <Text>{error.message}</Text>}
      {!isLoading && !error && data?.results.length === 0 && (
        <Text color="gray.500">该筛选条件下暂无游戏数据。</Text>
      )}
      <SimpleGrid {...gridProps}>{renderGridItems()}</SimpleGrid>
    </>
  );
};

export default GameGrid;
