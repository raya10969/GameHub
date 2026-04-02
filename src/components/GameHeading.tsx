import useGenreById from "@/hooks/useGenreById";
import usePlatformById from "@/hooks/usePlatformById";
import type { GameQuery } from "@/modules/gameQuery";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const selectedGenre = useGenreById(gameQuery.genreId);
  const selectedPlatform = usePlatformById(gameQuery.platformId)

  const heading = `${selectedPlatform?.name ?? ""} ${selectedGenre?.name ?? ""} Games`;
  return <Heading textStyle="h1">{heading}</Heading>;
};

export default GameHeading;
