import type { GameQuery } from "@/modules/gameQuery";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name ?? ""} ${gameQuery.genre?.name ?? ""} Games`;
  return <Heading textStyle="h1">{heading}</Heading>;
};

export default GameHeading;
