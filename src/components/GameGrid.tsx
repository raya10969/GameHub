import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "@/modules/genre";

interface GameCardProps {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: GameCardProps) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const gridProps = {
    padding: "3",
    columns: {
      base: 1,
      md: 2,
      lg: 3,
      xl: 4,
    },
    gap: "3",
  } as const;

  const renderGridItems = () => {
    if (isLoading) {
      return skeletons.map((skeleton) => (
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>
      ));
    }

    return data.map((game) => (
      <GameCardContainer key={game.id}>
        <GameCard game={game} />
      </GameCardContainer>
    ));
  };

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid {...gridProps}>{renderGridItems()}</SimpleGrid>
    </>
  );
};

export default GameGrid;
